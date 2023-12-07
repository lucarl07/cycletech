const subLogin = document.getElementById('submitLogin')
const email = document.getElementById('eMail')
const regexEmail = /^\S+@\S+\.\S+$/;
const senha = document.getElementById('senha')
const regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#%¨&*_])[0-9a-zA-Z$*&@#%¨&*_]{8,}$/;
const nome = document.getElementById('nome')

const nameUncorrect = document.getElementById('incorrect-name')
const uncorrect = document.getElementById('incorrect')
const uncorrectSenha = document.getElementById('incorrectSenha')
let validarSenha = false
let validarEmail = false
let validarNome = false

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

function validaNome(nome){
    if(nome.value == ''){
        return false;
    }else{
        return true;
    }
}

subLogin.addEventListener('click', function(){
        if(validaEmail(email, regexEmail) == false){
            uncorrect.innerHTML = 'Invalido<br>Seu email deve ser neste modelo: meu@email.com'
            validarEmail = false
        }else{
            uncorrect.innerText = ' '
            console.log('passou do Email')
            validarEmail = true
        }

        if(validaSenha(senha, regexSenha) == false){
            uncorrectSenha.innerHTML = 'Invalido. Sua senha deve conter: <ul><li>Ao menos 8 digitos</li><li>Ao menos um caracter especial</li><li>Ao menos 1 número</li><li>Ao menos 1 letra maiuscula</li></ul>'
            validarSenha = false
        }else{
            uncorrectSenha.innerText = ''
            console.log('passou da Senha')
            validarSenha = true
        }

        if(validaNome(nome) == false){
            nameUncorrect.innerHTML = 'Invalido. Seu nome não pode estar vazio!'
        }else{
            nameUncorrect.innerText = ''
            console.log('passou do nome')
            validarNome = true
        }

        if(validarSenha == true && validarEmail == true && validarNome == true){
            window.location.href = './inicio.html'
        }
})

function showPass() { 
    if(document.getElementById("senha").type == "password"){
        document.getElementById("senha").type = "text"
    }else{
        document.getElementById("senha").type = "password"
    }
} 
