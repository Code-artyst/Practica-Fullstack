
const mi_Promesa = new Promise((resolve, reject) => {
    console.log("Se estan Procesando los datos. Aguarde!!")

    setTimeout(() => {
        console.log("...");


        setTimeout(() => {
            console.log("......");


            setTimeout(() => {
                console.log(".........");


                setTimeout(() => {
                    resolve("Se procesaron los datos correctamente!!!")
                },3000)


            },3000)
        
        }, 3000)

    
    }, 3000)

});



(function main(){
    mi_Promesa.then(valor => {
        console.log(valor)
    });

})()