// Referência ao visor da calculadora
const visor = document.getElementById("visor");

// Função para inserir valores no visor
function inserir(valor) {
  if (visor.textContent === "0" || visor.textContent === "Erro") {
    visor.textContent = valor; // Substitui o zero inicial ou erro
  } else {
    visor.textContent += valor; // Adiciona o valor ao final
  }
}

// Função para calcular o resultado da expressão
function calcular() {
  try {
    let expressao = visor.textContent;

    // Substituir o símbolo de percentual (%) por cálculo equivalente
    if (expressao.includes("%")) {
      expressao = expressao.replace(/(\d+)%/g, (_, numero) => `(${numero}/100)`);
    }

    // Avalia a expressão e exibe o resultado
    const resultado = eval(expressao);

    // Atualiza o visor com o resultado ou retorna erro se indefinido
    visor.textContent = resultado !== undefined ? resultado : "Erro";
  } catch (e) {
    visor.textContent = "Erro"; // Mostra erro caso haja problema na expressão
  }
}

// Função para limpar o visor
function limpar() {
  visor.textContent = "0";
}

// Função para apagar o último caractere
function apagar() {
  if (visor.textContent.length > 1 && visor.textContent !== "Erro") {
    visor.textContent = visor.textContent.slice(0, -1); // Remove o último caractere
  } else {
    visor.textContent = "0"; // Retorna ao zero se só há um caractere
  }
}

// Função para alternar sinal positivo/negativo
function alternarSinal() {
  try {
    const numeroAtual = parseFloat(visor.textContent);
    if (!isNaN(numeroAtual)) {
      visor.textContent = numeroAtual * -1; // Alterna o sinal do número
    }
  } catch (e) {
    visor.textContent = "Erro";
  }
}

// Função para alterar o tema da calculadora
function mudarTema(tema) {
  document.body.className = tema; // Define a classe do corpo com o tema escolhido
}
