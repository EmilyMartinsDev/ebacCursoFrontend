function VerificaCpf(cpfPuro){
    let cpfLimpo = cpfPuro.replace('-', "")
    .replace(".", "")
    .replace(".", "")
    .split("")
    .slice(0,-2)
   
    
    let digitoUm = digito1(cpfLimpo);
    
    cpfLimpo.push(digitoUm)
    
    let digitoDois = digito2(cpfLimpo)
   
   let flag =  confereCpf(cpfPuro, digitoUm, digitoDois)

    return flag;
}

  function digito1(cpf){
      let acc = 10;
      let lista = [];
      let soma = 0;
     
      for(let i = 0; i< cpf.length; i++){
  
          lista[i] = cpf[i] * acc;
          soma += lista[i];
  
          acc--;
      }
  
          let digito1 = (soma / 11);
          let resto = soma % 11;
  
          if( resto % 11 >= 2){
              digito1 = 11 - resto; 
          }else{
              digito1 = 0
          }
          return digito1;
  }

  
   function digito2(cpf){
      let acc = 11;
      let lista = [];
      let soma = 0;
     
      for(let i = 0; i< cpf.length; i++){
  
          lista[i] = cpf[i] * acc;
          soma += lista[i];
  
          acc--;
      }
  
          let digitoDois = (soma / 11);
          let resto = soma % 11;
  
          if( resto % 11 >= 2){
              digitoDois = 11 - resto; 
          }else{
              digitoDois = 0
          }
          return digitoDois;
  } 

  function confereCpf(cpf, d1, d2){
    let ultimosDigitos = cpf.replace('-', "")
    .replace(".", "")
    .replace(".", "")
    .split("")
    .slice(-2)
    console.log(ultimosDigitos)
   
    if(ultimosDigitos[0] !== d1.toString() || ultimosDigitos[1] !==d2.toString() ){
        return false;
    }else{
        return true;
    }
  }


module.exports = VerificaCpf;