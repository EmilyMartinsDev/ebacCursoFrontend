module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    'dev/styles/main.css': 'src/styles/main.less'
                },

            },

            production:{
                options:{
                    compress: true,
                },
                files:{
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }   
        },

        replace:{
            dev:{
                options:{
                    patterns:[{
                        match:'ENDERECO_CSS',
                        replacement: './styles/main.css'
                    },
                    {
                        match:'ENDERECO_JS',
                        replacement: '../src/scripts/main.js'
                    }

                ]
                },
                files:[{
                    expand: true,
                    flatten: true,
                    src:['./src/index.html'],
                    dest: 'dev/'
                }]
            }
        },

        htmlmin:{
            dist:{
                options:{
                    collapseWhitespace: true,
                    removeComments: true,
                },
                files:{
                    'prebuild/index.html': './src/index.html'
                } 
            }       
        },

        uglify:{
            target:{
                files:{
                   'dist/scripts/main.min.js' : 'src/scripts/main.js'     
                }
            }
        },

        replace:{
            dist:{
                options:{
                    patterns:[{
                        match: 'ENDERECO_CSS',
                        replace: './styles/main.min.css'
                    },
                    {
                        match: 'ENDERECO_JS',
                        replace: './scripts/main.min.js'
                    }
                ]
                },
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src:['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        clean:['prebuild'],

        watch:{
            less:{
                files:['./src/styles/**/*.less'],
                tasks:['less:development']
            },
            html:{
                files:['./src/index.html'],
                tasks:['replace:dev']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production','htmlmin:dist', 'replace:dist', 'clean', 'uglify']);

}