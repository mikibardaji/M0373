//Teoria d'aquest codi => https://xtec.dev/typescript/sequence/
// dia 28/01/2025
//TREBALL AMB ARRAYS
let list: number[] = [6, 8, 11];
console.log(list);
list[1] = 13;
console.log(list);
console.log("Posicio 2 conte " + list[2]);
console.log("Posicio 5 conte " + list[5]);
list[1] = 15;
//console.log(list);
//AFEGIR ELEMENTS
list.push(25);
//console.log("Push afegit");
//console.log("Amb el push he afegit un numero " + list);
//ESBORRAR ELEMENT
list.pop();
//console.log("Pop treu el ultim de la llista");
//console.log(list);

//MOSTRAR TOTES LES POSICIONS DEL ARRAY
for(const numero of list)
{
    console.log(numero);
}
/* funcio map forma manual
LA FUNCIÓ MAP SERVEIX 
PER MODIFICAR ELS VALORS D'UN ARRAY 
A PARTIR D'UNA OPERACIÓ I PASSAR-LOS A UN ALTRE.*/

//Funció MAP de manera manual
let dobles: number[]=[];
for(const numero of list)
    {
        dobles.push(numero*2);
    }

console.log(dobles);

//Funció MAP 
let doblesmap: number[]=[];
doblesmap = list.map(x => x*2);
console.log("amb la funció map" + doblesmap);

/* funció filter 
serveix per filtrar dades a partir d'un criteri*/ 
let seleccio: number[]=[];
//Funció FILTER de manera manual
for(const numeroX of doblesmap)
{
    if (numeroX> 15)
    {
        seleccio.push(numeroX);
    }
}
console.log(seleccio);

//Funció FILTER 
let seleccioFilter: number[]=[];
seleccioFilter = doblesmap.filter(valor => valor>15);
console.log("funcio filter " + seleccioFilter);


/*FUNCIÓ REDUCE 
seleccionar tots els valors i realitzar 
un calcul RETORNANT UN SOL VALOR*/
console.log(list);
let sumaTotal = 0;
for(const numeroSingular of list)
{ //redueix a un sol valor amb un calcul
    sumaTotal += numeroSingular;
}
console.log(sumaTotal);
//funcio REDUCE tots els valors els redueix a un sol calcul
const sumaTotalReduce = list.reduce((acc, valor) => acc+valor,0);
console.log("reduce->" + sumaTotalReduce);

let listacompleta: number[] = [6, 18, 11,13,14,18,100];


const listaRecortada: number[] = listacompleta.slice(2,5);

console.log("retallat " + listaRecortada);

const NumerosSuperior12: number[] 
   = listacompleta.slice(1,5).filter((x) => x>12);
console.log("mes de 12 " + NumerosSuperior12);   