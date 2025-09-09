function obtenerElementos(tabla) {
    const tbody =  tabla;
    let lista = [];
    for (let i = 0; i < tbody.rows.length; i++) {
        let fila = tbody.rows[i]
        let datos = [];
        for (let j = 0; j < fila.cells.length; j++) {
            datos.push(fila.cells[j].textContent)
        }
        const persona = {
            nro: datos[0],
            nombre: datos[1],
            dirreccion: datos[2],
            barrio: datos[3],
            activo: datos[4],
        }
        lista.push(persona)
        }
    return lista 
    }

    
function buscarNombreBarrio(array, nombre, barrio) {
    let lista = array;
    let nom = nombre;
    let bar = barrio; 
    for(let i = 0; i < lista.length; i++) {
        if (nom == lista[i].nombre && bar == lista[i].barrio) 
            {return lista[i]} 
    }
    return false
} 

function agregarFila(objeto) {
    let persona = objeto;
    let fila = document.createElement("tr");
    let nro = document.createElement("td");
    nro.textContent = persona.nro
    let nombre = document.createElement("td");
    nombre.textContent = persona.nombre;
    let dirreccion = document.createElement("td");
    dirreccion.textContent = persona.dirreccion;
    let barrio = document.createElement("td");
    barrio.textContent = persona.barrio;
    let activo = document.createElement("td");
    activo.textContent = persona.activo;

    fila.appendChild(nro);
    fila.appendChild(nombre);
    fila.appendChild(dirreccion);
    fila.appendChild(barrio);
    fila.appendChild(activo);



    return fila
}



function buscarObjetos(evento){
    const e = evento;
    e.preventDefault();
    const tabla = document.getElementById("tabla")
    const tbody = document.getElementById("tabla").querySelector("tbody");
    const lista = obtenerElementos(tbody);
    console.log(lista)
    const nombre = document.getElementById("nombre").value;
    const barrio = document.getElementById("barrio").value;
    const activo = document.getElementById("inactivo").checked;
    if (activo) {
        if (!(buscarNombreBarrio(lista, nombre, barrio) == false)) {
            tbody.remove()
            const cuerpo = document.createElement("tbody");
            tabla.appendChild(cuerpo)
            cuerpo.appendChild(agregarFila(buscarNombreBarrio(lista, nombre, barrio)))
            return
        } 
        else {prompt("No se encontro la persona en la lista!!")}
    }
    else {

    }


        

     
}


function main(){
    const formulario = document.getElementById('formulario');
    if (!formulario) return;
    formulario.addEventListener('submit', (e) => buscarObjetos(e))
}

document.addEventListener('DOMContentLoaded', main);