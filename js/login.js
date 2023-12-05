const subLogin = document.getElementById('submitLogin')
const email = document.getElementById('eMail')
const regexEmail = /^\S+@\S+\.\S+$/;
const senha = document.getElementById('senha')
const regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#%¨&*])[0-9a-zA-Z$*&@#%¨&*]{8,}$/;

const uncorrect = document.getElementById('incorrect')
const uncorrectSenha = document.getElementById('incorrectSenha')
let validarSenha = false
let validarEmail = false

function validaEmail(email, regexEmail) {
    if(email.value.match(regexEmail)){
        return true;
    }else{
        return false;
    }
}

function validaSenha(senha, regexSenha){
    if(senha.value.match(regexSenha)){
        return true;
    }else{
        return false;
    }
}

subLogin.addEventListener('click', function(){
        if(validaEmail(email, regexEmail) == false){
            uncorrect.innerHTML = 'Invalido'
            validarEmail = false
        }else{
            uncorrect.innerText = ' '
            console.log('passou do Email')
            validarEmail = true
        }

        if(validaSenha(senha, regexSenha) == false){
            uncorrectSenha.innerHTML = 'Invalido'
            validarSenha = false
        }else{
            uncorrectSenha.innerText = ''
            console.log('passou da Senha')
            validarSenha = true
        }

        if(validarSenha == true && validarEmail == true){
            window.location.href = '../pages/inicio.html'
        }
})

function showPass() { 
    if(document.getElementById("senha").type == "password"){
        document.getElementById("senha").type = "text"
    }else{
        document.getElementById("senha").type = "password"
    }
} 