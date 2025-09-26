
/* 

Condição if else simples para testar o método Number.isInteger().
Com numeros 10.0, 5.0, 57.0, x.0 é conciderado inteiro.

*/

let numero = 10.5

if(typeof(numero) == 'number'){
    if(Number.isInteger(numero) == false){
        console.log('Float')
    }else{
        console.log('Integer')
    }
}else{
    console.log('Tipo não numerico')
}