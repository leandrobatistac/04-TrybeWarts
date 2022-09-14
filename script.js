// ===================================================================================
// Conferir Login e Senha

const emailLogin = document.getElementById('inputLogin');
const senhaLogin = document.getElementById('inputSenha');
const botaoLogin = document.getElementById('botaoLogin');
let confereEmail = false;
let confereSenha = false;

function conferirLogin() {
  if (emailLogin.value === 'tryber@teste.com') {
    confereEmail = true;
  }
}

function conferirSenha() {
  if (senhaLogin.value === '123456') {
    confereSenha = true;
  }
}

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
