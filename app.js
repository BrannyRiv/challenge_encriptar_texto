function encriptar() {
    let inputTexto = document.querySelector('.texto_encriptado').value;
    let textoEncriptado = inputTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Mostrar el texto encriptado en el área de desencriptar
    document.getElementById('area_desincriptar_mensaje').innerText = textoEncriptado;
    // Ocultar la imagen y el texto de ayuda
    document.getElementById('muneco').style.display = 'none';
    document.querySelector('.area_desincriptar_textos').style.display = 'none';
    document.querySelector('.area_desincriptar_mensaje').style.display = 'block';
    document.querySelector('.area_desencriptar_boton3').style.display = 'block'; // Mostrar el botón de copiar
    // Cambiar justify-content a space-between
    document.querySelector('.area_desincriptar').style.justifyContent = 'space-between';

    // Limpiar el input de texto
    document.querySelector('.texto_encriptado').value = '';
}

function desencriptar() {
    let inputTexto = document.querySelector('.texto_encriptado').value;
    let textoDesencriptado = inputTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('area_desincriptar_mensaje').innerText = textoDesencriptado;
    document.getElementById('muneco').style.display = 'none';
    document.querySelector('.area_desincriptar_textos').style.display = 'none';
    // Limpiar el input después de enviar el dato
    document.querySelector('.texto_encriptado').value = '';

}

function copiarTexto() {
    let textoParaCopiar = document.getElementById('area_desincriptar_mensaje');
    let rango = document.createRange();
    rango.selectNodeContents(textoParaCopiar);
    let seleccion = window.getSelection();
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    document.execCommand('copy');

}

// Agrega estos listeners para evitar que los enlaces recarguen la página
document.querySelector('.area_encriptar_boton1').addEventListener('click', function(event) {
    event.preventDefault();
    encriptar();
});

document.querySelector('.area_encriptar_boton2').addEventListener('click', function(event) {
    event.preventDefault();
    desencriptar();
});

document.querySelector('.area_desencriptar_boton3').addEventListener('click', function(event) {
    event.preventDefault();
    copiarTexto();
});
