let pista = 100;
let cadeiraSuperior = 200;
let cadeiraInferior = 400;

function comprar() {
    //recuperar valores
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    
    //decrementar a quantidade de ingressos
    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade de ingressos indisponível');
    } else {
        qtdPista -= qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Ingresso(s) comprado(s) com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade de ingressos indisponível');
    } else {
        qtdInferior -= qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Ingresso(s) comprado(s) com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade de ingressos indisponível');
    } else {
        qtdSuperior -= qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Ingresso(s) comprado(s) com sucesso!');
    }
}
