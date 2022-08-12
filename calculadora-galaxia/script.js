const resultScreen = document.querySelector('#painel');
let operation;


function botao(value){
    operation = resultScreen.value += value;
}

function clean(){
    resultScreen.value = "";
}

function calculate(){
    const result = eval(operation);
    resultScreen.value = result;
}

function popVal(){
    const phrase = resultScreen.value;


}


