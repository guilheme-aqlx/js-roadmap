
let userName = 'guilherme-aqlx'

function menssagem(user){
    
    let date = new Date()
    let hour = date.getHours()

    if(hour < 12){
        console.log(`Olá ${user}, bom dia.`)
    }
    else if(hour >= 12 && hour < 18){
        console.log(`Olá ${user}, boa tarde.`)
    }
    else{
        console.log(`Olá ${user}, boa noite.`)
    }
}

menssagem(userName)