const resultScreen = document.querySelector('#painel');
let operation;


function botao(value){
    operation = resultScreen.value += value;
}

function clean(){
    resultScreen.value = "";
}

function calculate(){
    var resultado = 0;
    resultado = document.getElementById('painel').value;
    document.getElementById('painel').value = '';
    document.getElementById('painel').value = eval(resultado)
}






