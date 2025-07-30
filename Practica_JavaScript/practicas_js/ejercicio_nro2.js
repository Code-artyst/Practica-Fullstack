const Chance = require('chance')
const chance = new Chance()

class Persona {
    constructor (nombre, apellido, profesion, fechaNacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.fechaNacimiento = fechaNacimiento; 
    };

    saludar() {
        console.log(`Hola, mucho gusto! Mi nombre es ${this.nombre}`)
    }

    es_mayor_Edad() {
        const hoy = new Date()
        return ((hoy.getFullYear() - this.fechaNacimiento.getFullYear()) >= 18)
    }
}

function lista() {
    let personas = []
    const nombres = ["Lucía", "Mateo", "Camila", "Joaquín", "Valentina", "Santiago", "Martina", "Benjamín", "Juana", "Thiago"];
    const apellidos = ["Gómez", "Pérez", "Rodríguez", "Fernández", "López", "García", "Sánchez", "Romero", "Torres", "Álvarez"];
    const profesiones = ["Ingeniero/a", "Profesor/a", "Médico/a", "Diseñador/a", "Abogado/a", "Contador/a", "Programador/a", "Arquitecto/a", "Psicólogo/a", "Periodista"];
    const fechasNacimiento = ["2024-03-15", "1985-07-22", "2010-11-08", "2000-01-30", "2012-05-17", "1992-10-04", "1988-06-12", "1995-12-25", "1999-08-03", "1991-04-27"];

    for (let i = 0; i < 8; i++){
        let nombre = chance.pickone(nombres)
        let apellido = chance.pickone(apellidos)
        let profesion = chance.pickone(profesiones)
        let fechaNacimiento = chance.pickone(fechasNacimiento)
        let persona = new Persona(nombre, apellido, profesion, new Date(fechaNacimiento))
        personas.push(persona)
    }
    return personas
}

function mayoresDeEdad(personas) {
    let lista = personas
    let mayores = []
    for (let i = 0; i < lista.length ; i++) {
        lista[i].es_mayor_Edad() && mayores.push(lista[i]);

    }
    return mayores
}

/* La funcion mayoresDeEdad esta bien, pero mejor seria comenzar a utilizar filter(), el cual me ayuda
a crear un nuevo array filtrando todos los elementos del anterior bajo ciertos parametros, quedaria
tal que asi: 

function mayoresDeEdad(personas) {
    return personas.filter(p => p.es_mayor_Edad());
}

Mas conciso y facil de entender, y ademas, aplica los conocimientos dados en la semana! 

*/

function personasXProfesion(personas, laburo) {
    let lista = personas;
    let profesion = laburo;
    let personasXProfesion = [];
    for (let i = 0; i < personas.length; i++){
        (personas[i].profesion === profesion) && personasXProfesion.push(personas[i]);  
    }
    return personasXProfesion
}

/* Lo mismo dicho en el anterior comentario, la funcion personasXProfesion 
funciona correctamente, pero se podria ahorrar en codigo y ser mas eficientes 
si uso la funcion filter(), me ahorro en lineas de codigo
y es mas facil de enteder, entonces, 
CADA VEZ que me toque trabajar con arrays a los cuales 
les tenga que discriminar elementos, esta es la mejor opcion, quedaria asi:

function personasXProfesion(personas, profesion) {
    return personas.filter(p => p.profesion === profesion);
}

Mas limpio y, mucho mas importante, USA LOS CONTENIDOS DE LA SEMANA!!!

*/

function mas_grande(personas){
    let lista = personas;
    let persona_grande = lista[0];
    for (let i = 0; i < lista.length; i++){ 
        (persona_grande.fechaNacimiento > lista[i].fechaNacimiento) && (persona_grande = lista[i]);

    } 
    return persona_grande
}


function obtenerProfesiones(personas){
    let lista = personas 
    profesiones = []
    for(let i = 0; i < lista.length; i++){
        !profesiones.includes(lista[i].profesion) && profesiones.push(lista[i].profesion);

    }
    return profesiones
}

/* Si necesito crear un array nuevo, dentro del cual tengo que primero 
iterar sobre otro array y sus elementos USO MAP!!!, deja de ser 
pelotudo y empeza a pensar!!

*/


function main(){
    const personas = lista();
    const mayores = mayoresDeEdad(personas);
    const persona_Mas_Grande = mas_grande(personas);
    const lista_Profesiones = obtenerProfesiones(personas); // Empezar a usar camelCase, osea listaProfesiones, y ademas, es redundante usar solo profesiones
    console.log(personas);
    console.log("Las personas mayores de edad son: ");
    console.log(mayores);
    const personas_profesion = personasXProfesion(personas, "Ingeniero/a");
    if (personas_profesion.length > 0) {console.log("Se encontraron los siguientes resultados")
        console.log(personas_profesion)
    }
    else {console.log("No se encontro ningun resultado!!")}
    console.log("La persona mas grande es: ")
    console.log(persona_Mas_Grande)
    console.log("La lista de profesiones encontradas es la siguiente: ");
    console.log(lista_Profesiones);

}


main()