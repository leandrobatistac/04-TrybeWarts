// ===================================================================================
// Variaveis Globais

const emailLogin = document.getElementById('inputLogin');
const senhaLogin = document.getElementById('inputSenha');
const botaoLogin = document.getElementById('botaoLogin');
const botaoEnviar = document.getElementById('submit-btn');
const checkEnvio = document.getElementById('agreement');
const contador = document.getElementById('counter');
const areaTexto = document.getElementById('textarea');
const tela1 = document.getElementById('tela1');
const tela2 = document.getElementById('form-data');
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

// ===================================================================================
// Variaveis Nova Div

const primeiroNome = document.getElementById('input-name');
const ultimoNome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const texto = document.getElementById('textarea');
let string = '';

// ===================================================================================
// Função para substituir página 1/2

const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');
const p5 = document.querySelector('.p5');
const p6 = document.querySelector('.p6');
const p7 = document.querySelector('.p7');

function alterarPagina() {
  const familia = document.querySelector('input[name="family"]:checked');
  const rate = document.querySelector('input[name="rate"]:checked');
  const conteudo = document.querySelectorAll('input[name="checkbox"]:checked');
  for (let i = 0; i < conteudo.length; i += 1) {
    string += ''.concat(conteudo[i].value);
    if (i !== conteudo.length - 1) {
      string += ', ';
    }
  }
  tela1.style.display = 'none';
  tela2.style.display = 'flex';
  p1.innerHTML += ''.concat(primeiroNome.value, ' ', ultimoNome.value);
  p2.innerHTML += ''.concat(email.value);
  p3.innerHTML += ''.concat(casa.value);
  p4.innerHTML += ''.concat(familia.value);
  p5.innerHTML += ''.concat(string);
  p6.innerHTML += ''.concat(rate.value);
  p7.innerHTML += ''.concat(texto.value);
}

botaoEnviar.addEventListener('click', alterarPagina);
