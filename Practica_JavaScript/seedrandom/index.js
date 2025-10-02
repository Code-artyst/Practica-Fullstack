const seedrandom = require('seedrandom');
const generador = seedrandom(1763519);


function generador_aleatorios(){
    let lista = [];
    for (let i = 0; i < 1000000; i++){
        lista.push(generador.int32())
    }
    return lista
}


function main() {
    nros_aleatorios = generador_aleatorios()
    console.log(nros_aleatorios.length)
}




main()



