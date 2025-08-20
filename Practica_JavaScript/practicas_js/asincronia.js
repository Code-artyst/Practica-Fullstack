// Usando función anónima:
// Imprimo A
console.log('A');
// Luego ejecuto setTimeout con un callback que imprime B pero luego de 2 segundos
setTimeout(function () {
console.log('B');
}, 2000)
// Al final imprimo C
console.log('C');
/* Resultado del código anterior
A
C
B 
=> Después de 2 segundos
*/