
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var btnEncriptar = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopiar = document.getElementById("btnCopiar");
btnCopiar.addEventListener("click",copiarAlPortapapeles);
btnEncriptar.addEventListener("click",encriptar);
btnDesencriptar.addEventListener("click",desencriptar);

//desactivaTextArea();

function desactivaTextArea(){
    document.getElementById("textoSalida").disabled = true;
}

function copiarAlPortapapeles(){
    // Solo funciona dentro del navegador
    let textCopied = document.getElementById("textoSalida").value;
    navigator.clipboard.writeText(textCopied);
    alert("Texto copiado");
}

function encriptar(){

    //Recupera el texto 
    var texto = document.getElementById("textoEntrada").value;
    //Elimina acentos
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    //Pasa a minusculas
    texto = texto.toLowerCase();
    //Elimina espacios en blanco
    texto = texto.replace(/\s+/g, '');

    var textoA = Array.from(texto);
    var textoEncriptado = "";

    textoEncriptado = texto.replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/a/gi,'ai').replace(/o/gi,'ober').replace(/u/gi,'ufat');
    //textoEncriptado = texto.replace(/a/gi,'ai').replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/o/gi,'ober').replace(/u/gi,'ufat');

    document.getElementById("textoSalida").value = textoEncriptado;

}

function desencriptar(){

    //Recupera el texto
    var texto = document.getElementById("textoEntrada").value;
    
    var textoDesencriptado = "";

    textoDesencriptado = texto.replace(/ai/gi,'a').replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    
    document.getElementById("textoSalida").value = textoDesencriptado;
}
