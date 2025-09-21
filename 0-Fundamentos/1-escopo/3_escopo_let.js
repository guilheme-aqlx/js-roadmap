// Variavel numero1 fora do contexto de bloco
let numero1 = 23

{
    /*
    Varivavel com o memso nome do contexto fora do bloco. Porem o valor 29 fica restrito apenas ao bloco
    */
    let numero1 = 29
    console.log(numero1)
}

/*
Aqui o valor que será imporesso é o 23, pois a variavel LET com o mesmo nome dentro do bloco não altera a variavel fora do bloco
*/ 
console.log(numero1)

/*
No exemplo anterior foram criadas duas variaveis com mesmo nome em contextos diferentes, sem sobreescrever os valores.
Porem, dentro do bloco, é possivel alterar a varial LET antes do bloco
*/

let numero2 = 72
console.log(`\nVariavel "numero2" antes do bloco: ${numero2}\n`)

{
    numero2 = 144
    console.log(`\nVariavel "numero2" dentro do bloco: ${numero2}\n`)
}

console.log(`\nVariavle "numero2" depois do bloco: ${numero2}`)
