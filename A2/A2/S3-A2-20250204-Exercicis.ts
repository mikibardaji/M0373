//Calcula la mitjana aritmètica dels 
//5 primers valors de la llista:

const xs: (number| null) [] = 
[8, 9, 4, 5, null, 16, 2, 9, null, 4, 7, 2, 3];

const array_elements_correctes = xs.slice(0,5).filter((x) => x!=null);
const suma = array_elements_correctes
       .reduce((acc,x) => acc + x,0);
const num_elements = array_elements_correctes.length;    

console.log(suma/num_elements);

//Calcula la mitjana aritmètica dels 5 primers números 
//de la llista (has d'ometre els valors null):
const array_elements_ok_snull = xs.filter((x) => x!=null).slice(0,5);
const sumaNull = array_elements_ok_snull
       .reduce((acc,x) => acc + x,0);
const num_elementsNull = array_elements_ok_snull.length; 
console.log(sumaNull/num_elementsNull);

//A continuació tens una llista de lectures de temperatures de l'observatori 
//"Can Pixa" que necessita urgentment un nou lector de temperatures.
//Calcula la mitja de la temperatura de cada dia filtrant aquelles temperatures que són clarament errònes:

const tss = [
    [23, null, 45, 666, 45, null],
    [3, -4, 5, null, 4555555555, 6],
    [5, 4, 23, null, -333333, 6]
];

const resultat = [];
let sumaTemp:number|null=0;
let numeroValid:number|null=0;
for (const tempUnidimensional of tss)
{
    const temperaturaFiltrada = 
    tempUnidimensional.filter(x => x!=null && x>=-30 && x<50);
    sumaTemp = temperaturaFiltrada.reduce((acc,x) => acc+x,0);
    numeroValid = temperaturaFiltrada.length;
    resultat.push(sumaTemp/numeroValid);
}
console.log(resultat);