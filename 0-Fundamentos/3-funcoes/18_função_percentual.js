
/**
 * Essa função tem a finalidade de calcular o percentual de um numero. 
 *
 * 
 * @param {Number} parcial Esse primeiro parametro é o numero parcial de algo. Ex: dia 271
 * @param {Number} total Numero total. Ex: 365 dias do ano
 * @param {Boolean} format Por padão "false" o resultado será um numero do tipo float. 
 * Ex: 0.74246575. Caso seja "true" a saída será uma string formatada. Ex: 74.2 % * 
 * @param {Number} decimal Numero de casas decimais da formatação. O padrão é uma casa decimal
 * @returns 
 */
function percentual(parcial, total, format = false, decimal = 1){

    let result

    try{
        result = parcial / total    

    }catch{
        console.log('Não foi possivel calcular')
    }

    if(format){
        result = (result * 100).toFixed(decimal)
        result = `${result} %`
    }

    return result
}

console.log(percentual(271,365))
console.log(percentual(271, 365, format = true))
console.log(percentual(271, 365, format = true, decimal = 0))
console.log(percentual(271, 365, format = true, decimal = 2))
console.log(percentual(271, 365, format = true, decimal = 3))