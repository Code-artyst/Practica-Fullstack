function esPrimo(num) {
    let flag = true
        if (num < 2) {return false} 
        if (num === 2) {return true} 
        if (num > 2) {
            for (let div = 2; div <= Math.round(num**(0.5)); div++){
                ((num % div) === 0) && (flag = false)
            }
            return flag
    }
}

function generarPrimos(hasta) {
    let lista = []
    for (let i = 2; i <= hasta; i++) {
        if (esPrimo(i)) {lista.push(i)}

    }
    return lista

}

function trabajarConPrimos(array) {
    const p = array;
    const primos = p.filter(primo => esPrimo(primo))
    console.log(primos)
    const cuadrados_primos = primos.map(primo => primo ** 2);
    let suma = 0;
    primos.forEach(primo => suma = suma + primo)

    console.log(cuadrados_primos)
    console.log(`La suma total de los primos fue: ${suma}`)
    if (primos.find(primo => primo < 5)) {
        console.log("No todos los numeros primos en la lista son mayores a 5!!")
    }
    else {
        console.log("Todos los numeros primos en la lista con mayores a 5!!")
    }
}


function main() {
    const numeros = [4, 5 , 4 , 7, 8, 9, 4, 10, 21, 34, 77, 13, 23, 47]
    trabajarConPrimos(numeros)

}

main()