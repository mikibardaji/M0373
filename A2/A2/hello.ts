console.log("Hello World");
let message:string;
/*message = "Hola";
console.log(message);
message = "3";
console.log(message);

let message2;
const fija = "HOLA";
const fija2 = "ADIOS";*/

let edat = prompt("Que edad tienes","18");

console.log(edat);
//confirm espera Y/N i ho guarda com boolean
let continuar = confirm("Estas seguro de tu edad");

console.log(continuar);
//alert("Has escrito ${age} ...");

console.log(typeof continuar);
console.log(typeof edat);

let edatNumerico = Number(edat);
let suma = edatNumerico + 10;
console.log(suma);
let edatErronea = Number("HOLA");
console.log(edatErronea);
//convertir numero Number(XXX)
//convertir String(YYYY)
