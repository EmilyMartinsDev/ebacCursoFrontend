const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const feedBack = document.getElementById('resultado');
    feedBack.style.display = 'block';

    const inputAltura = document.getElementById('altura');
    const inputPeso = document.getElementById('peso');

    const altura = Number(inputAltura.value);
    const peso = Number(inputPeso.value);

   if(!altura || !peso){
    alert('preencha os campos');
    return;
   }

   const imc  = calculaImc(peso, altura);

   let resultado = geraResultado(imc);
 
   feedBack.innerText = `Seu IMC é de: ${Math.round(imc)}, portanto, você se enquadrada: ${resultado}`

});

function calculaImc(peso, altura){
    const imc = peso / (altura * altura);
    
    return imc;

}


function geraResultado(imc){
    const resultado = ['abaixo peso', 'peso ideal', 'excesso de peso', 'obesidade', 'obesidade extrema']

    if(imc > 40){
        return resultado[4];
    }
    if(imc > 30){
        return resultado[3];
    }

    if(imc > 25){
        return resultado[2];
    }
    if(imc > 18.5 ){
        return resultado[1];
    }
    if(imc < 18.5){
        return resultado[0];
    }
}