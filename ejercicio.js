/* =======================================================
   LA LÓGICA DEL MINIJUEGO
   Aquí configuramos los niveles, lo que debe aprender
   el jugador y qué pasa cuando se equivoca o acierta.
========================================================== */

const niveles = [
    {
        instruccion: "Paso 1: Agrega tu Imagen de Perfil para que te conozcan.",
        etiquetaCorrecta: "img",
        promptParams: ["Ingresa la URL de la imagen (o deja en blanco para usar una foto de muestra):"],
        render: (url) => {
            const finalUrl = url || "https://i.pinimg.com/originals/0a/bb/80/0abb807cbbae99e497e3b41113937de3.jpg";
            return `<img src="${finalUrl}" alt="Mi perfil" class="pop-in">`;
        }
    },
    {
        instruccion: "Paso 2: ¡Agrega un título grandote con tu Nombre!",
        etiquetaCorrecta: "h1",
        promptParams: ["¿Cuál es tu nombre? ¡Escríbelo!"],
        render: (nombre) => {
            return `<h1 class="pop-in">${nombre || 'Desarrollador Increíble'}</h1>`;
        }
    },
    {
        instruccion: "Paso 3: Ahora, agrega un párrafo de texto para una breve descripción tuya.",
        etiquetaCorrecta: "p",
        promptParams: ["Escribe una breve descripción de ti o tus hobbies:"],
        render: (desc) => {
            return `<p class="pop-in">${desc || 'Estoy aprendiendo a programar y me encanta armar páginas web.'}</p>`;
        }
    },
    {
        instruccion: "Paso 4: Por último, agrega un Enlace para que visiten tus otros proyectos.",
        etiquetaCorrecta: "a",
        promptParams: ["¿Cómo se debe llamar el botón? (ej: Ir a Github)", "¿Hacia qué página web irán al darle clic? (Puedes inventar)"],
        render: (texto, url) => {
            return `<a href="${url || 'https://celred.vercel.app/'}" target="_blank" class="pop-in">${texto || '😁'}</a>`;
        }
    }
];

// Base de datos de etiquetas para confundir al jugador (y para darle correcciones claras)
const bddEtiquetas = [
    { nombre: "h1", descError: "¡Eso es para un súper título principal!, no te sirve aquí." },
    { nombre: "p", descError: "P es para párrafos de texto largos. Sigamos buscando." },
    { nombre: "img", descError: "IMG solo puede escupir fotografías." },
    { nombre: "a", descError: "La A o 'Anchor' sirve exclusivamente para crear enlaces hacia otros lados." },
    { nombre: "div", descError: "DIV es una 'caja invisible' para organizar, pero no hace lo que pedimos." },
    { nombre: "ul", descError: "UL crea una viñeta para una Lista. Eso no nos sirve aquí." },
    { nombre: "button", descError: "Es parecido a un enlace visualmente de a ratos, pero nosotros queremos usar HTML estándar :)" },
    { nombre: "h3", descError: "Es un subtítulo bastante pequeño." }
];

// == ELEMENTOS DEL JUEGO ==
let nivelActual = 0;
const cajaInstruccion = document.getElementById("instruccion-actual");
const contenedorBotones = document.getElementById("contenedor-botones");
const tarjeta = document.getElementById("tarjeta-perfil");
const toast = document.getElementById("toast");

// Función para mostrar las notificaciones arriba estilo toast
function mostrarToast(mensaje, esExito = false) {
    toast.textContent = mensaje;
    toast.className = "toast show"; // Lo despliega

    if (esExito) {
        toast.classList.add("success");
    } else {
        toast.classList.remove("success");
    }

    // Ocultarlo a los 3 segundos y medio
    setTimeout(() => {
        toast.className = "toast";
    }, 3500);
}

// Inicializar y resetear la partida
function iniciarJuego() {
    nivelActual = 0;
    tarjeta.innerHTML = ""; // Limpiamos el tablero
    cajaInstruccion.style.backgroundColor = "#3b82f6"; // Azul default
    cargarNivel();
}

// Cargar la etapa actual del juego
function cargarNivel() {
    // Si ya no hay más niveles.. victoria!
    if (nivelActual >= niveles.length) {
        cajaInstruccion.innerHTML = "¡Misión Cumplida! 🎉 ¡Acabas de programar todo un componente con creatividad y código. Eres un Genio.";
        cajaInstruccion.style.backgroundColor = "#10b981"; // Verde Exito
        contenedorBotones.innerHTML = `<button class="btn-etiqueta pop-in" onclick="iniciarJuego()" style="grid-column: span 2; background-color: #f39c12; color: #1e293b; border:none; font-family:'Segoe UI'">Jugar de Nuevo 🎮</button>`;
        return;
    }

    const nivel = niveles[nivelActual];
    // Pintar texto animado
    cajaInstruccion.innerHTML = `<span class="pop-in" style="display:inline-block">${nivel.instruccion}</span>`;

    // Reiniciar los botones
    contenedorBotones.innerHTML = '';

    // Agarrar la respuesta correcta de la Base de datos
    let respuestaCorrecta = bddEtiquetas.find(e => e.nombre === nivel.etiquetaCorrecta);
    let etiquetasEnBotones = [respuestaCorrecta];

    // Conseguir 3 "trampas" o distractores al azar
    let distractores = bddEtiquetas.filter(e => e.nombre !== nivel.etiquetaCorrecta);
    distractores.sort(() => Math.random() - 0.5); // Randomizer
    etiquetasEnBotones.push(distractores[0], distractores[1], distractores[2]);

    // Mezclar esos 4 botones para que la repuesta no esté siempre en el mismo sitio
    etiquetasEnBotones.sort(() => Math.random() - 0.5);

    // Pintar los 4 botones
    etiquetasEnBotones.forEach((etiquetaInfo, indice) => {
        let botonHTML = document.createElement("button");
        botonHTML.className = "btn-etiqueta pop-in";
        botonHTML.style.animationDelay = `${indice * 0.1}s`; // Efecto de que caen en cascada progresiva
        // Símbolos para que se vea como en VSCode
        botonHTML.textContent = `<${etiquetaInfo.nombre}>`;

        // Cuando el usuario le da Click a un boton
        botonHTML.onclick = (e) => {
            if (etiquetaInfo.nombre === nivel.etiquetaCorrecta) {
                // ACERTÓ!
                manejarAcierto(nivel);
            } else {
                // FALLÓ. Feedback visual educativo
                e.target.classList.add("shake");
                mostrarToast(`¡Casi! ${etiquetaInfo.descError}`);

                // Limpiar la animación de error rápido para que la pueda volver a repetir si persiste
                setTimeout(() => e.target.classList.remove("shake"), 400);
            }
        };

        contenedorBotones.appendChild(botonHTML);
    });
}

// Acción cuando le atina
function manejarAcierto(nivel) {
    mostrarToast("¡Correcto! Excelente deducción, colega.", true);

    // Como queremos mucha interactividad, usaremos prompt() para pedirle información según el tipo de bloque
    let respuestasDeUsuario = [];
    if (nivel.promptParams) {
        nivel.promptParams.forEach(pregunta => {
            let res = prompt(pregunta);
            respuestasDeUsuario.push(res);
        });
    }

    // Inyectamos el componente visual a la pantalla de preview, pasándole las cosas que él tipeó
    if (nivel.render) {
        let theHTML = nivel.render(...respuestasDeUsuario);
        tarjeta.innerHTML += theHTML;
    }

    // Pasamos a la siguiente fase
    nivelActual++;

    // Y hay un ligero tiempo muerto para que logre apreciar cómo la pantalla derecha se actualiza
    setTimeout(() => {
        cargarNivel();
    }, 1500);
}

// Arrancar en 3, 2, 1...
iniciarJuego();
