const Chance = require('chance')
const chance = new Chance()


function sum(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++){
        suma += array[i] 
    }
    return suma
}


function precipitaciones_aleatorias() {
    const año = []
    for (let i = 0; i < 12; i++) {
        let mes = [];
        for (let j = 0; j < 30 ; j++) {
            mes.push(chance.integer({min: 15, max: 35}))
        }
        let prom = (sum(mes) / 30);
        año.push(Math.round(prom));
    }
    return año
}

function mes_mas_seco(array) {
    array = array
    let precipitacion = array[0]
    let indice = 0 
    for (let i = 0; i < array.length; i++){
        if (array[i] < precipitacion) { 
            precipitacion = array[i];
            indice = i;   
        }
    }
    return [indice, precipitacion]
}

function main() {
    let matriz = precipitaciones_aleatorias();
    let prom_anual = sum(matriz) / 12;
    let primer_semestre = Math.round(sum(matriz.slice(0, 6)) / 6);
    let segundo_semestre = Math.round(sum(matriz.slice(6, 12)) / 6);
    let [indice, precipitacion] = mes_mas_seco(matriz)
    console.log(matriz)
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

    console.log(`El promedio anual de lluvias fue de: ${Math.round(prom_anual)}°`)
    console.log(`El primer semestre tuvo una media de preciptaciones de: ${primer_semestre}°
El segundo semestre tuvo una media de precipitaciones de: ${segundo_semestre}°`)
    console.log(`El mes mas seco fue ${meses[indice]} con una precipitacion media de: ${precipitacion}°`)
}

main()
