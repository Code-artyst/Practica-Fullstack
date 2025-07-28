const Chance = require('chance')
const chance = new Chance()


function precipitaciones_aleatorias() {
    const año = []
    for (let i = 0; i < 12; i++) {
        mes = []
        for (let j = 0; j < 30 ; j++) {
            mes.push((chance.integer({min: 15, max: 35}))+"°")
            j++
        }
        año.push(mes)
        i++
    }
}

function mostrar_matriz(matriz) {
    m = matriz
    for (let i = 0; i < m.length ; i++)
        console.log(m[i]/n)

}

function main() {
    matriz = precipitaciones_aleatorias();
    console.log(matriz);
    let lista = [2, "boludo", "tupido", 10.2];
    console.log(lista);

}

main()
