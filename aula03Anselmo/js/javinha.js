function entrar(){
    var user = document.getElementById("cxnome").value;

    var senha = document.getElementById("cxsenha").value;

    if(user=="motta" && senha=="3010"){
        alert("acesso permitido")
    }
    else{
        alert("acesso negado")
    }
}

function calcular() {
var nu1 = document.getElementById("cx1").value;
nu1= parseFloat(nu1)
if(nu1%2==0){
    alert("par")
}
else{
    alert("ímpar")
}
}

var nome = prompt("Dgt seu nome:")
    document.write(`Aluno: ${nome}`)

    function nota(){
    
    var n1 = parseFloat( document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var n3 = parseFloat(document.getElementById("nota3").value);
    var t = (n1+n2+n3)/3
    var media = document.getElementById("res")
    let item = document.createElement(`option`)
    item.text = `${t}`
    media.appendChild(item)
    if (t >= 7){
        window.alert("aprovado");
    } else {
        window.alert("reprovado");
    }
}
