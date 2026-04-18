# Plan de Proyecto: Colección de Cartas de Jugadores de Fútbol

## 1. Descripción del Proyecto
Este mini-proyecto consiste en una aplicación web interactiva que simula una colección de cartas de jugadores de fútbol (estilo FIFA Ultimate Team o Panini). El objetivo principal es aplicar los conceptos básicos de **Diagramación y Algoritmos** utilizando las tecnologías web fundamentales: HTML, CSS y JavaScript.

---

## 2. Relación con la Materia (Diagramación y Algoritmos)

Este proyecto es ideal porque permite implementar estructuras de control, algoritmos clásicos y representarlos visualmente antes de programarlos.

### A. Algoritmos a Implementar
- **Estructuras de Datos (Arreglos/Objetos):** Uso de arreglos de objetos en JavaScript para almacenar la información de las cartas (Nombre, Equipo, País, Posición, y Estadísticas como Ritmo, Tiro, Pase, etc.).
- **Algoritmos de Clasificación (Ordenamiento):** 
  - Ordenar las cartas según su puntuación global (Mayor a Menor) o alfabéticamente por nombre. (Aquí se puede aplicar un algoritmo como *Bubble Sort*, *Selection Sort*, o usar métodos nativos si el profesor lo permite).
- **Algoritmos de Búsqueda:** 
  - Buscar un jugador por su nombre. Implementar una búsqueda lineal (*Linear Search*).
- **Filtros condicionales:** 
  - Filtrar jugadores por posición (Delanteros, Mediocampistas, Defensas, Porteros).
- **Cálculo de Promedios:** 
  - Algoritmo matemático básico para calcular el "Overall" (Puntaje global) sumando las estadísticas y dividiéndolas.

### B. Diagramación (Para presentar al profesor)
Antes de tirar código, debes presentar diagramas que expliquen tu lógica:
1. **Diagrama de Flujo - Añadir Jugador:**
   - [Inicio] -> [Leer datos del formulario] -> [Validar datos vacíos] -> [Crear Objeto Jugador] -> [Añadir a la Lista] -> [Actualizar Pantalla] -> [Fin].
2. **Diagrama de Flujo - Búsqueda de Jugador:**
   - [Inicio] -> [Leer input de búsqueda] -> [Recorrer lista de jugadores] -> [¿El nombre coincide?] -> (Sí: Mostrar carta) -> (No: Seguir buscando) -> [Fin].
3. **Wireframes (Bocetos visuales):**
   - Un dibujo sencillo de cómo se verá la web ( Barra de búsqueda arriba, botones de ordenar, y una cuadrícula de cartas abajo).

---

## 3. Fases de Desarrollo (Plan de Trabajo)

Presenta estas fases a tu profesor para mostrar organización:

### Fase 1: Diseño y Planificación Lógica (Semana 1)
- Definir qué estadísticas tendrá cada carta de jugador.
- Crear los **Diagramas de Flujo** de los algoritmos principales (Búsqueda y Ordenamiento).
- Dibujar el boceto (Wireframe) de la página web.

### Fase 2: Estructura y Estilos - HTML & CSS (Semana 2)
- **HTML:** Crear el esqueleto semántico. Un `<header>` con buscador, un `<form>` para agregar cartas nuevas, y un `<main>` grid para mostrar las cartas.
- **CSS:** Darle vida a las cartas. Usar *Flexbox* o *Grid* para acomodarlas. Diseñar la carta para que se vea atractiva con colores, bordes redondeados y tipografías geniales.

### Fase 3: Lógica y Datos - JavaScript Base (Semana 3)
- Crear una "Base de datos" manual (un Array de Objetos en JS con al menos 5-10 jugadores iniciales).
- Escribir la función principal para "Pintar" (`render`) las cartas en el HTML usando iteraciones (`for` o `forEach`).

### Fase 4: Interactividad y Algoritmos - JavaScript Avanzado (Semana 4)
- Programar la funcionalidad del **Buscador**.
- Programar los **Botones de Ordenamiento** (Ordenar por mejores estadísticas).
- (Punto Extra): Hacer funcionar el formulario para que el usuario pueda agregar un nuevo jugador y que la página se actualice.

---

## 4. Estructura de Datos Propuesta (Ejemplo en código)

Para que se lo muestres a tu profesor, así se vería la estructura de datos:

```javascript
// Arreglo que contiene los objetos (cartas)
let jugadores = [
    {
        nombre: "Lionel Messi",
        pais: "Argentina",
        equipo: "Inter Miami",
        posicion: "Delantero",
        estadisticas: {
            ritmo: 80,
            tiro: 87,
            pase: 90,
            regate: 94,
            defensa: 33,
            fisico: 64
        },
        imagen: "ruta/messi.png"
    },
    // ... más jugadores
];
```

## 5. Resumen Ejecutivo (El Pitch)
"Profesor, mi proyecto constará de una aplicación web de Coleccionables de Fútbol. Me enfocaré en demostrar mis conocimientos de Algoritmos implementando sistemas de Búsqueda Secuencial (para encontrar jugadores por nombre) y de Ordenamiento (para organizar los jugadores por estadística y posición). Además, demostraré mis habilidades de Diagramación mediante los flujogramas de estos procesos matemáticos y la estructuración del diseño UI usando HTML y CSS moderno."
