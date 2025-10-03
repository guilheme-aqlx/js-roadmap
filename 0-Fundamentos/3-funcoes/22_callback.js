function conectar(nome){
    console.log(`Conectando no banco de dados: ${nome}`)
}

function desconectar(nome){
    console.log(`Desconectando no banco de dados: ${nome}`)
}

function executar(value, tarefa){
    tarefa(value)
    console.log()
}

executar('vra', conectar)
executar('vra', desconectar)