/*
Exercici
Suposa que tens un array amb les vendes d'alguns productes 
(en unitats de moneda). Volem realitzar les següents operacions:

Filtrar les vendes vàlides (per exemple, que siguin majors que 0 i menors o iguals a 1000).
Aplicar un descompte del 10% a les vendes vàlides.
Sumar el total de les vendes després d'aplicar el descompte.
Dades d'entrada
const sales = [500, 1500, 200, -100, 700, 300, 1200, 900, 0, 450];
*/

const sales = [500, 1500, 200, -100, 700, 300, 1200, 900, 0, 450];

const ventesValides = sales.filter(sale => sale >0 && sale <= 1000);
console.log(ventesValides);

const ventesDescompte = ventesValides.map(sale => sale*0.9);
console.log(ventesDescompte);

const totalVentes = ventesDescompte.reduce((accumulator,sale) => accumulator+sale,0);

console.log(totalVentes);