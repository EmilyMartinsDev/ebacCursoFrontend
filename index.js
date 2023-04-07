const form = document.querySelector("#form");
const input_campoA = document.querySelector("#campoA");
const input_campoB = document.querySelector("#campoB");
const resultado = document.querySelector(".resultado");
const error = document.querySelectorAll(".error-message")

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const campoA = parseFloat(input_campoA.value);
    const campoB = parseFloat(input_campoB.value);

    if(!campoA && !campoB){
       error[0].style.display = 'block';
       error[1].style.display = 'block';
  

       return;

    }    
    if(!campoA){
        error[0].style.display = 'block';
    
        return;
     }
     
    if(!campoB){
        error[1].style.display = 'block';

        return;
     }
 

    const isValid =  validaForm(campoA, campoB);

    exibeResultado(isValid);
});

input_campoA.addEventListener('change', ()=>{

    error[0].style.display = 'none';
    error[1].style.display = 'none';

});


input_campoB.addEventListener('change', ()=>{

    error[0].style.display = 'none';
    error[1].style.display = 'none';

});



 function validaForm(A, B){
   return B > A
 }

 function exibeResultado(isValid){
    if(!isValid){
        resultado.classList.add("invalid");
        resultado.innerHTML = "Formulário invalido, pois, B não é maior que A" ;   
        return; 

    }else{
        resultado.classList.add("valid");
        resultado.innerHTML = "Formulário valido, pois, B é maior que A" ; 
    }
 }