import { createReadStream } from 'fs';
import csv from 'csv-parser';


function readCSV(file) {
    return new Promise((resolve, reject) => {
        const results = [];
        createReadStream(file)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    }) 
}


(function main(){
    readCSV('./data/tbbt.csv')
        .then(data => {
            data.forEach(element => {
                console.log(element);
                
            });
        })
        .catch(error => console.error('Error al leer archivo CSV', error))
})()