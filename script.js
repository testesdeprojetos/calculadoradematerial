var dias = document.getElementById("qntdDias");

var qntdGazeDia = document.getElementById("qntdGaze");
var qntdSondaDia = document.getElementById("qntdSonda");
var qntdSacoColetorDia = document.getElementById("qntdSacoColetor");

var qntdGazeOutput = document.getElementById("qntdGazeOutput");
var qntdSondaOutput = document.getElementById("qntdSondaOutput");
var qntdSacoColetorOutput = document.getElementById("qntdSacoColetorOutput");

function gerarTabela(){
    qntdGazeOutput.innerText = qntdGazeDia.value * dias.value;
    qntdSondaOutput.innerText = qntdSondaDia.value * dias.value;
    qntdSacoColetorOutput.innerText = qntdSacoColetorDia.value * dias.value;
}

