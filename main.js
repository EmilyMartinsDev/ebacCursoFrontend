const VerificaCpf = require("./VefificaCpf");

function Conta(nome, cpf, agencia, inicialSaldo){
    let _nome = nome;
    let _cpf = cpf;
    let _agencia = agencia;
    let _saldo = inicialSaldo ;

   

    this.getNome = ()=>{
        return _nome;
    }

    this.setNome = (nome)=>{
        if(!nome || typeof nome !== 'string' || nome.length < 2){
            throw new Error("Nome invalido")
        }   
        _nome = nome;
    }


    this.getAgencia = ()=>{
        return _agencia;
    }

    this.setNome = (agencia)=>{
        if(!agencia || typeof agencia !== 'string'){
            throw new Error("Nome invalido")
        }   
        _agencia = agencia;
    }

    this.getCPF = ()=>{
        return _cpf;
    }

    this.setCPF = (cpf)=>{
       let autenticado =  VerificaCpf(cpf);

       if(!autenticado){
        throw new Error("Cpf invalido")
       }
       _cpf = cpf;

    }

    this.setSaldo = function(saldo){
        if(typeof saldo !== "number"){
            throw new Error("Saldo invalido")
        }
        _saldo = saldo;
    }
    this.getSaldo = function(){
        return _saldo;
    }


    this.sacar = function(valor){
        if(_saldo <= valor || typeof valor !== "number" || !valor){
            throw new Error("Não foi passível efetuar o pagamento")
        }
        _saldo = _saldo - valor;
        
    }


    this.depositar = function(valor){
        if(typeof valor !== "number" || !valor){
         throw new Error("Não foi passível efetuar o pagamento")
        }
        _saldo += valor;
    }

}

function ContaPoupanca(nome, cpf, agencia, inicialSaldo){
    Conta.call(this, nome, cpf, agencia, inicialSaldo)   
    
    
    this.rendimento = function(){
        setTimeout(()=>{
            const taxa = 0.005;
    
             try{
                let  saldo =  this.getSaldo() * taxa;
                this.setSaldo(saldo)
             }catch{
                this.setSaldo(this.getSaldo());
             } 
        
        },155520000000 );
    } // a cada mes irá gerar um novo valor a partir do saldo
}

function ContaCorrente(nome, cpf, agencia, inicialSaldo,  plano = 'basico'){
    Conta.call(this, nome, cpf, agencia, inicialSaldo)  
   
    let _plano = plano
   let _taxaPlano = 50;

   this.desconto = function(){
    if(_plano == 'basico'){
        return;
    }
    setTimeout(function(){
        let saldo  = this.getSaldo() - _taxaPlano;
        this.setSaldo(saldo);
    }, 155520000000 ); // a cada mes ira descontar caso seja premium

   }
   
   this.getPlano = function(){
    return _plano;
   }
   this.setPlano = function(plano){
    if(typeof plano !== 'string'){
        throw new Error("Nao foi possivel realizar troca/pedido de plano");
    }
    _plano = plano;
   }
}


const conta_Maria = new ContaPoupanca('Maria', '604.453.700-50', '001', 2000);
const conta_Joao = new ContaCorrente('João', '464.599.680-04','0001', 5000, 'premium' );
const conta_Emily = new ContaPoupanca('Emily', '305.725.570-19', '002', 4000,);

console.log(conta_Joao.getPlano())
