let numeroSecreto = gerarNumeroAleatorio()

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}

// Nesta aula:
// Criamos uma função em JavaScript para gerar um número aleatório utilizando o método Math.random();

// Utilizamos a palavra-chave "return" dentro da função para retornar o valor do número aleatório gerado;

// Criamos outra função chamada exibirTextoNaTela que possui dois parâmetros;

// Compreendemos a diferença entre funções com retorno e funções sem retorno e aprendemos como chamar e invocar a função para exibir uma mensagem inicial na tela;

// Vimos como os parâmetros e retornos são importantes para a comunicação entre funções e o restante do programa.