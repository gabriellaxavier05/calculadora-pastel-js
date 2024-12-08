// Referência ao visor da calculadora
const visor = document.getElementById("visor");

// Função para inserir valores no visor
function inserir(valor) {
  if (visor.textContent === "0") {
    visor.textContent = valor; // Substitui o zero inicial
  } else {
    visor.textContent += valor; // Adiciona o valor ao final
  }
}

// Função para calcular o resultado da expressão
function calcular() {
  try {
    // Avalia a expressão inserida no visor
    visor.textContent = eval(visor.textContent); // eval() identifica a expressão
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
  if (visor.textContent.length > 1) {
    visor.textContent = visor.textContent.slice(0, -1); // Remove o último caractere
  } else {
    visor.textContent = "0"; // Retorna ao zero se só há um caractere
  }
}

// Função para alterar o tema da calculadora
function mudarTema(tema) {
  document.body.className = tema; // Define a classe do corpo com o tema escolhido
}
