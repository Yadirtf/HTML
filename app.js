/**
 * 1. Estructura de Datos Básica
 */
const jugadores = [
    {
        id: 1,
        nombre: "Lionel Messi",
        posicion: "EI",
        foto: "messi.jpg",
        rating: 90,
        estadisticas: {
            rit: 80, tir: 87, pas: 90, reg: 94, def: 33, fis: 64
        }
    },
    {
        id: 2,
        nombre: "Kilian Mbappé",
        posicion: "DC",
        foto: "Mbappe.jpg",
        rating: 91,
        estadisticas: {
            rit: 97, tir: 90, pas: 80, reg: 92, def: 36, fis: 78
        }
    },
    {
        id: 3,
        nombre: "Vini Jr.",
        posicion: "EI",
        foto: "Vini.jpg",
        rating: 89,
        estadisticas: {
            rit: 95, tir: 82, pas: 81, reg: 90, def: 29, fis: 68
        }
    },
    {
        id: 4,
        nombre: "J. Bellingham",
        posicion: "MC",
        foto: "Bellingham.jpg",
        rating: 86,
        estadisticas: {
            rit: 82, tir: 84, pas: 85, reg: 88, def: 78, fis: 82
        }
    }
];

// Imprimimos el arreglo en la consola para demostrar que la base de datos funciona.
console.log("¡Base de datos cargada!");
console.log("Lista de jugadores:", jugadores);

/**
 * Nota para la Fase 2 del Proyecto:
 * Aquí es donde más adelante pondre los Algoritmos de Búsqueda y Ordenamiento 
 * para conectar esta base de datos con el HTML.
 */
