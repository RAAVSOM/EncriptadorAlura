let textArea = document.getElementById("TextArea");

let encriptaciones = [];

function encriptar(mensaje){
    let cadena = [];
    for (let index = 0; index < mensaje.length; index++) {
        if(mensaje[index] == "a"){
            cadena.push("ai");
        }else if(mensaje[index] == "e"){
            cadena.push("enter");

        }else if(mensaje[index] == "i"){
            cadena.push("imes");

        }else if(mensaje[index] == "o"){
            cadena.push("ober");

        }else if(mensaje[index] == "u"){
            cadena.push("ufat");

        }else{
            cadena.push(mensaje[index]);
        }
    }

    let resultado = "";
    
    return resultado.concat(...cadena);
}

function desencriptar(){
    for (let index = 0; index < encriptaciones.length; index++) {
        if(encriptaciones[index] == textArea.value){
            break;
        }else if(textArea.value.includes("ai") || textArea.value.includes("enter") || textArea.value.includes("imes") || textArea.value.includes("ober") || textArea.value.includes("ufat")){
            break;
        }else if((index + 1) == encriptaciones.length){
            alert("Este mensaje no esta encriptado");
            return null;
        }
    }

    let resultado = textArea.value;
    resultado = resultado.replaceAll("ai", "a"); 
    resultado = resultado.replaceAll("enter", "e"); 
    resultado = resultado.replaceAll("imes", "i"); 
    resultado = resultado.replaceAll("ober", "o"); 
    resultado = resultado.replaceAll("ufat", "u"); 
    
    textArea.value = resultado;
}

function prepararEncriptado(){
    if(verificar(textArea.value)){
        alert("No puedes encriptar mensajes con mayusculas o caracteres especiales");
        return null;
    }else{
        document.getElementById("None-Content").style.display = "none";

        let lista = document.querySelector("#List-Element ul");
        let container = document.getElementById("List-Element");

        crearNuevoTexto(encriptar(textArea.value), textArea.value, lista, container);
    }
}

function crearNuevoTexto(mensajeEncriptado, mensaje, lista, container){
    for (let index = 0; index < encriptaciones.length; index++) {
        if(encriptaciones[index] === mensaje){
            alert("Ya has encriptado un mensaje igual");
            return null;
        }else if(encriptaciones[index] === mensajeEncriptado){
            alert("Este mensaje ya esta encriptado");
            return null;
        }
    }
    encriptaciones.push(mensajeEncriptado);
    let li = document.createElement("li");
    let boton = document.createElement("button");

    boton.textContent = mensajeEncriptado;
    boton.classList.add("boton");

    boton.addEventListener("click", function() {
        textArea.value = boton.textContent;
    });

    li.appendChild(boton);
    lista.appendChild(li);
    container.style.display = "flex";
}

let abec = /[A-Z]/;
let carac = /[áéíóúüÁÉÍÓÚÜ]/;
let regex = /[^\w\sáéíóúüÁÉÍÓÚÜ]/g;
function verificar(mensaje){
    if(abec.exec(mensaje)){
        return true;
    }else if(regex.exec(mensaje)){
        return true;
    }else if(carac.exec(mensaje)){
        return true;
    }
    return false;
}


let botonCopiado = document.getElementById("copybutton");
botonCopiado.addEventListener('click', function() {
    navigator.clipboard.writeText(textArea.value).then(function() {
      alert("Copiado exitosamente");
    }).catch(function(err) {
      alert("Error de copiado");
    });
  });
  



