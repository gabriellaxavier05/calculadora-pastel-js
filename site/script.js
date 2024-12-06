const resultado = document.querySelector(".result") // faz referência à classe 'result'
const botoes = document.querySelectorAll(".buttons button") // faz referência a todos os botões que utilizam a classe 'buttons'

// Criando variáveis
let numAtual = ""; // arrmazena o número atual
let primeiroOperando = null; // primeiro operador
let operador = null; 
let restart = false; // para reiniciar a calculadora; começa com falso

// Função que atualiza o resultado

function atualizaResult(originClear = false){ // verifica se originClear é verdadeiro ou falso
    if (originClear){ // se for verdadeiro...
        resultado.innerText = 0; // muda o texto para 0
    }
    else { // se continuar sendo falso...
        resultado.innerText = numAtual.replace(".", ","); // o resultado será o numAtual, substituindo o ponto pela vírgula
    }
}

// Função que verifica se o botão da vírgula está sendo pressionado e também adiciona um dígito ao número atual
function adicionaDig(digito){ // 'digito' é o parâmetro da função
    if (digito === "," && (numAtual.includes(",") || !numAtual)) return; // impede que o usuário adicione + de 1 vírgula ao numAtual

    if (restart){ // se a calculadora precisar ser reiniciada (quando o usuário clica em um número após um cálculo), o número atual será substituído pelo dígito pressionado
        numAtual = digito; // igual o número atual informado pelo usuário ao dígito
        restart = false;
    }
    else { // caso o número não precise ser reiniciado, o dígito pressionado será adicionado ao numAtual
        numAtual = numAtual + digito;
    }

    atualizaResult(); // atualiza o valor exibido na calculadora
}


// Percorrendo os botões com a classe 'buttons' e adicionando o evento de click
buttons.forEach((button) => {
    button.addEventListener("click", () => { 
        const textoBotao = button.innerText; // o texto do botão clicado é armazenado na variável textoBotao
        if (/^[0-9,]+$/.test(textoBotao)){ // verifica se o texto do botão contém apenas números e vírgulas
            adicionaDig(textoBotao); // chama a funcao adicionaDig que passa como parâmetro o texto do botão
        }
    });
});