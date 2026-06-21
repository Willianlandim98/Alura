// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.


function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}



function calcularFatorial(numero) {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}



function converterDolarParaReal(valorDolar) {
    let cotacaoDolar = 4.80;
    return valorDolar * cotacaoDolar;
}



function calcularSalaRetangular(largura, altura) {
    let area = largura * altura;
    let perimetro = 2 * (largura + altura);

    document.querySelector("h2").innerHTML =
        `Área: ${area} | Perímetro: ${perimetro}`;
}

calcularSalaRetangular(5, 4);



function calcularSalaCircular(raio) {
    let pi = 3.14;
    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;

    document.querySelector("h3").innerHTML =
        `Área: ${area.toFixed(2)} | Perímetro: ${perimetro.toFixed(2)}`;
}

calcularSalaCircular(3);



function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        document.querySelector("h4").innerHTML = 
            `${numero} x ${i} = ${numero * i}`;
    }
}
mostrarTabuada(2)