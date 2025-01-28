let list: number[] = [6, 8, 11];
console.log(list);
list[1] = 13;
console.log(list);
console.log("Posicio 2 conte " + list[2]);
console.log("Posicio 5 conte " + list[5]);
list[1] = 15;
//console.log(list);
list.push(25);
//console.log("Push afegit");
//console.log("Amb el push he afegit un numero " + list);
list.pop();
//console.log("Pop treu el ultim de la llista");
//console.log(list);

for(const numero of list)
{
    console.log(numero);
}
/* funcio map forma manual*/
let dobles: number[]=[];
for(const numero of list)
    {
        dobles.push(numero*2);
    }

console.log(dobles);

let doblesmap: number[]=[];
doblesmap = list.map(x => x*2);
console.log("amb la funció map" + doblesmap);

//filter seleccionar alguns valors
let seleccio: number[]=[];
for(const numeroX of doblesmap)
{
    if (numeroX> 15)
    {
        seleccio.push(numeroX);
    }
}
console.log(seleccio);

let seleccioFilter: number[]=[];
seleccioFilter = doblesmap.filter(valor => valor>15);
console.log("funcio filter " + seleccioFilter);
//reduce seleccionar tots els valors i realitzar un calcul
console.log(list);
let sumaTotal = 0;
for(const numeroSingular of list)
{ //redueix a un sol valor amb un calcul
    sumaTotal += numeroSingular;
}
console.log(sumaTotal);
//funcio reduce tots els valors els redueix a un sol calcul
const sumaTotalReduce = list.reduce((acc, valor) => acc+valor,0);
console.log("reduce->" + sumaTotalReduce);