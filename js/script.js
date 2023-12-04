
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function  () {
    body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});

document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('menu-btn');
    var menuOptions = document.getElementById('menu-options');
  
    menuBtn.addEventListener('click', function () {
      menuOptions.style.display = (menuOptions.style.display === 'block') ? 'none' : 'block';
    });
  });

  /* Senha*/

  function alterarSenha() {
    var newPassword = document.getElementById('newPassword').value;
  
    if (newPassword.length >= 6 && /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
      // Simulação de confirmação por e-mail
      var emailConfirmation = prompt("Digite o código de confirmação enviado para o seu e-mail:");
  
      if (emailConfirmation) {
        alert("Senha alterada com sucesso!");
      } else {
        alert("Código de confirmação inválido. Alteração de senha cancelada.");
      }
    } else {
      alert("A senha deve ter no mínimo 6 caracteres e incluir pelo menos um caractere especial.");
    }
  }
  
  function cancelar() {
    alert("Alteração de senha cancelada");
  }
  
  