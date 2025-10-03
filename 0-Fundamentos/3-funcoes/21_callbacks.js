
function conectar(){
    console.log('Conectando no banco de dados')
}

function desconectar(){
    console.log('Desconectando do banco de dados')
}

function executar(tarefa){
    console.log('Executando comando:')
    tarefa()
    console.log()
}

executar(conectar)
executar(desconectar)