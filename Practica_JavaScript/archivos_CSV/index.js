let nombre = "juan";
const promesa = new Promise( (resolve, reject) => {
    if (nombre === "juan"){
        resolve(`${nombre}!! Eres justo la persona que necesitamos!`)
    }else {
        reject(`${nombre} no es la persona que buscamos!!`)
    }







});


