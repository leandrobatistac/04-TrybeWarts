// ===================================================================================
// Variaveis Globais

const emailLogin = document.getElementById('inputLogin');
const senhaLogin = document.getElementById('inputSenha');
const botaoLogin = document.getElementById('botaoLogin');
const botaoEnviar = document.getElementById('submit-btn');
const checkEnvio = document.getElementById('agreement');
const contador = document.getElementById('counter');
const areaTexto = document.getElementById('textarea');
let confereEmail = false;
let confereSenha = false;

// ===================================================================================
// Função para conferir o email do Login

function conferirLogin() {
  if (emailLogin.value === 'tryber@teste.com') {
    confereEmail = true;
  }
}

// ===================================================================================
// Função para conferir a senha do Login

function conferirSenha() {
  if (senhaLogin.value === '123456') {
    confereSenha = true;
  }
}

// ===================================================================================
// Função para enviar informações e conferir Login/Senha

function conferirLoginSenha() {
  conferirLogin();
  conferirSenha();
  if (confereEmail && confereSenha) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

botaoLogin.addEventListener('click', conferirLoginSenha);

// ===================================================================================
// Ativar/Desativar Botão de Submit

function checarBotao() {
  if (checkEnvio.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

checkEnvio.addEventListener('click', checarBotao);

// ===================================================================================
// Função para contar de Caracteres

const caracteresMaximo = parseInt(contador.innerText, 10);
function subtrairCaracteres() {
  contador.innerText = caracteresMaximo - areaTexto.value.length;
}

areaTexto.addEventListener('keyup', subtrairCaracteres);
