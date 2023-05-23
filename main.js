const Alunos = [
    {"nome": "maria", "nota": 8},
    {"nome": "joao", "nota": 6},
    {"nome": "marcelo", "nota": 5},
    {"nome": "ana", "nota": 9},
    {"nome": "leticia", "nota": 4},
    {"nome": "pedro", "nota": 7},
]

// retornando um array de objetos com as informações dos alunos aprovados
function notasMedia(){
    const alunosEstrelas = Alunos.filter(aluno=> aluno.nota >= 6);
    
    return alunosEstrelas;
 
}

// ou a opção de retornar apenas um array com nomes dos alunos sem o objeto

function notasMedia2(){
    const alunosEstrelas = Alunos.filter(aluno=> aluno.nota >= 6);
    let alunosAprovados = [];

    for(let object of alunosEstrelas){
        const {nome} = object;
    
        alunosAprovados.push(nome);
    }   

    return alunosAprovados;
}




