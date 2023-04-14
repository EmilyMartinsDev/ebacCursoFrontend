$(document).ready(()=>{



    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000');


       $('form').validate({
          rules:{
              email:{
                  required: true,
                  email:true,
                  
              },
              nome:{
                  required: true,
                  
              },
              cpf:{
                  required: true,
                  
              },
              cep:{
                  required: true,
              }
            
                
            },
            messages: {
                email:{
                  required: 'esse campo é obrigatório'
                },
                nome:{
                    required: 'esse campo e obrigatorio'
                },
                cpf:{
                    required: 'esse campo é obrigatório'
                },
                cep:{
                    required: 'esse campo é obrigatório'
                }
              },
   
         
          submitHandler: function(form){
              form.submit();
          },

 
        })
 
})