// Seleccionamos los elementos HTML con los que queremos interactuar
// usando el ID que les pusimos en index.html
const botonColor = document.getElementById('btnColor');
const botonOcultar = document.getElementById('btnOcultar');
const imagen = document.getElementById('miImagen');

// 1. Funcionalidad: Cambiar color de fondo al azar
// Le decimos al botón que "escuche" un 'click' y ejecute una acción
botonColor.addEventListener('click', function() {
    // Generar un código de color hexadecimal aleatorio (ejemplo: #ff00ab)
    // Explicación: Math.random() crea un número decimal al azar, lo multiplicamos por 16777215 (el total de colores HTML),
    // le quitamos los decimales con Math.floor y lo convertimos a formato hexadecimal (letras y números) con toString(16)
    const colorAlAzar = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    // Cambiar la propiedad de estilo del body (el cuerpo de la página)
    document.body.style.backgroundColor = colorAlAzar;
});

// 2. Funcionalidad: Ocultar o mostrar la imagen
botonOcultar.addEventListener('click', function() {
    // Preguntamos si la imagen está visible o no
    if (imagen.style.display === 'none') {
        // Si está oculta, la mostramos
        imagen.style.display = 'block';
        // Y cambiamos el texto del botón
        botonOcultar.textContent = 'Ocultar Imagen';
    } else {
        // Si está visible, la ocultamos
        imagen.style.display = 'none';
        botonOcultar.textContent = 'Mostrar Imagen';
    }
});
