// Dados de usuários registrados (apenas para demonstração)
const users = [
  { email: "usuario1@example.com", senhaHash: "hashed_password1" },
  { email: "usuario2@example.com", senhaHash: "hashed_password2" },
];

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Verificar se o email existe na lista de usuários
  const user = users.find((u) => u.email === email);

  if (user && validarSenha(senha, user.senhaHash)) {
    alert("Login bem-sucedido!");
  } else {
    alert("Credenciais inválidas. Tente novamente.");
  }
}

function validarSenha(senha, senhaHash) {
  // Verifique a senha com a função de verificação de hash segura (por exemplo, bcrypt)
  // Em uma implementação real, você usaria uma biblioteca de hashing segura.
  // Aqui, estamos apenas comparando senhas de texto simples para fins de demonstração.
  return senha === senhaHash;
}

function esqueceuSenha() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("recoveryForm").style.display = "block";
}

function enviarEmailRecuperacao() {
  const recEmail = document.getElementById("recEmail").value;

  // Envie um email com um link seguro para redefinir a senha.
  // Em um sistema real, você usaria um servidor de email e um processo mais seguro.
  alert("Email de recuperação enviado para " + recEmail);
}

function voltarParaLogin() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("recoveryForm").style.display = "none";
}
