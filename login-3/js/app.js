const inputEmail = document.getElementById("email")
const inputPassword = document.getElementById("password")
const form = document.getElementById("form")

const errorPrincipal = document.getElementById("errorPrincipal")
const errorCorreo = document.getElementById("errorCorreo")
const errorContrasena = document.getElementById("errorContrasena")

const correoCorrecto = "hola@prueba.com"
const contrasenaCorrecta = "1234"


form.addEventListener("submit", function(e){
    e.preventDefault();
    const emailValueInput = inputEmail.value;
    const passwordValueInput = inputPassword.value;
    errorCorreo.style.display = "none";
    errorContrasena.style.display = "none";
    errorPrincipal.style.display = "none";
    errorPrincipal.style.color = "red"
    
    console.log("Em-Inp:", emailValueInput )
    console.log("Pw-Inp:", passwordValueInput )
    console.warn("Em-C:", correoCorrecto)
    console.warn("Pw-C:", contrasenaCorrecta)

    if( emailValueInput == "" && passwordValueInput == "" ){
        errorPrincipal.style.display = "block"
        return
    }
    if( emailValueInput == "" ){
        errorCorreo.style.display = "block";
        return
    }
    if( passwordValueInput == "" ){
        errorContrasena.style.display = "block"
        return
    }
    if( emailValueInput != correoCorrecto || passwordValueInput != contrasenaCorrecta ) {
        errorPrincipal.style.display = "block";
        errorPrincipal.innerText = "El usuario y/o contraseña son inválidos."
        return;
    }

    errorPrincipal.style.display = "block";
    errorPrincipal.style.color = "green"
    errorPrincipal.innerText = "Sesión iniciada correctamente."

})

