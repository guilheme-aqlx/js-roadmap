let pi = 3.141592

console.log(`
    ${Number.isInteger(pi)}
    `)

// Testendo alguns metodos de casas decimais
console.log(`${Number('3.14')} ---> ${typeof Number('3.14')}`)
console.log()

// O metodo toFixed() converte o float para uma string
console.log(`${pi.toFixed(2)} ---> ${typeof pi.toFixed(2)}`)
console.log()

//Usando o Number
console.log(`${Number(pi.toFixed(2))} ---> ${typeof Number(pi.toFixed(2))}`)
console.log()

//Outra forma usando o parseFloat
console.log(`${Number.parseFloat(pi.toFixed(2))} --> ${typeof Number.parseFloat(pi.toFixed(2))}`)