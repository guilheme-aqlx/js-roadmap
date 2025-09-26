
// Exemplo bem simples para entender a estrutura do operador ternario em JS
let age = 15

// Operador ternario bem simples
// console.log(age >= 18 ? "Pode dirigir" : "Não pode dirigir")


// Uma versão mais elaborada apenas para treinar a logica
let restante = 18 - age

let mensagem = age >= 18 ? 'Legal, você já pode dirigir' : `${restante == 1 ? 'Falta' : 'Faltam'} ${restante} ${restante == 1 ? 'ano' : 'anos'} para você dirigir`
console.log(mensagem)