let age = "1"

try{
    if(typeof age == 'number'){
        console.log('Dado numerico')
    }else{
        throw new Error('Esse dado não é numérico')
    }
} catch (e){
    console.log(e)
} finally{
    console.log('fim do bloco')
}