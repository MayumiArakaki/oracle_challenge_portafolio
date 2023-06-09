
// referencia a los elementos del formulario
const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const asuntoInput = document.getElementById('asunto');
const mensajeInput = document.getElementById('mensaje');
const enviado = document.getElementById('alert');

form.addEventListener("submit", e=>{
        e.preventDefault()
        let aviso = "";
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let entrar = false;
        enviado.innerHTML = "";
        if(nombreInput.value.length<6){//valida que el nombre sea de mas de 6 caracteres
            aviso +=  'El nombre no es valido';
            entrar = true;
        }
        if(!regexEmail.test(emailInput.value)){//valida el correo
            aviso +=  'El email no es valido';
            entrar = true;
        }
        if(asuntoInput.value.length<1){
            aviso += 'Olvidaste poner el asunto';
            entrar = true;
        }
        if(mensajeInput.value.length<1){
            aviso += 'No olvides poner tu mensaje'
            entrar = true
        }
        
        if(entrar){
            enviado.innerHTML = aviso
        }else{
            enviado.innerHTML = "Enviado"
        }
    }
)