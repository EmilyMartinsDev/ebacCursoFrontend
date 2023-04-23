const arrayNumeros = [1,20,40,5,70,4]

function retornaMaior(array){
    let maior = 0;

    for( let num of array){
        if(maior < num){
            maior = num;
        }
    }

    return maior;
}

console.log(retornaMaior(arrayNumeros));