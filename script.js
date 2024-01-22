function enviar() {
  var email = document.getElementById("email").value;
  var psw = document.getElementById("psw").value;
  var emailError = document.getElementById("emailError");
  var pswError = document.getElementById("pswError");
  var redirectLogin = null;
  var emailIsValid = false;
  var pswIsValid = false;

  function validarEmail() {
    if (email != "caio@gmail.com") {
      document.getElementById("psw").value = "";
      document.getElementById("email").value = "";
      emailError.textContent = "Email inválido!";
      emailIsValid = false;
      console.log(emailIsValid)
    } else {
      document.getElementById("psw").value = "";
      document.getElementById("email").value = "";
      emailError.textContent = "";
      emailIsValid = true;
    }
    console.log(emailIsValid);
    return emailIsValid;
  }

  function validarPsw() {
    if (psw != "123456") {
      document.getElementById("psw").value = "";
      document.getElementById("email").value = "";
      pswError.textContent = "Senha incorreta!";
      pswIsValid = false;
    } else {
      document.getElementById("psw").value = "";
      document.getElementById("email").value = "";
      pswError.textContent = "";
      pswIsValid = true;
    }
    console.log(pswIsValid);
    return pswIsValid;
  }

  validarEmail();
  validarPsw();

  var redirectLogin = emailIsValid && pswIsValid;

  if (redirectLogin == true) {
    window.location.href = "redirect.html";
  }
}
