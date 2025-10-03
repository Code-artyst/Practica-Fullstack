let nombre = "pedro";
const promesa = new Promise((resolve, reject) => {
    if (nombre === "juan"){
        resolve(`${nombre}!! Eres justo la persona que necesitamos!`)
    }else {
        reject(`${nombre} no es la persona que buscamos!!`)
    }




});


(function main() {
    promesa
        .then(valor => {console.log(valor)})
        //.catch(error => console.log(error))

})()

