//us de bakcslash
/*let name = "Miquel Angel";

console.log(`Hola et dius ${name}!`);

console.log(`La suma es ${2+3}`);

console.log(`El numero 2 elevat a 3 es ${2**3}`);
*/
//operador ternari ?
/*let age2 = Number(prompt("Quina edat tens","18"));
let result:string;
if (age2>18)
{
    result = "Ets major dedat";
}
else{
    result = "No ets major d'edat";
}

console.log(result);

let result2 = (age2>=18) ? "Pots votar":"No pots votar";
console.log(result2);

let result3 = (age2<3) ? "Tens que anar a infantil":
                (age2<16) ? "Encara tens que anar a la ESO":
                (age2<20) ? "Tens que estudiar o pots treballar" :
                "Ja tens edat per treballar";

console.log(result3);*/
//exercici 6
/*let login: string | null = prompt("Tipo trabajador");

let message =
    (login == 'Empleado') ? 'Hola' :
        (login == 'Director') ? 'Felicidades' :
            (login == null) ? 'Sin sesión' : '....'

console.log(message)*/
//exercici 2
/*let age2 = Number(prompt("Quina edat tens","18"));

if (age2<40 || age2>60)
{
    console.log("Edat OK");
}

let result = (age2<40 || age2>60) ? "Edat ok ternaria":"No ok";
console.log(result);

if (!(age2>=40 && age2<=60))
{
    console.log("Edat ok2");
}*/
//Valor NaN Not a Number
/*let i=0;
while (i!= -1)
{
    let NumeroString = prompt("Pon un numero");
    i = Number(NumeroString);
    if (!Number.isNaN(i))
    {
        console.log(i);
    }
    else
    {
        console.log("no es numero valid");
    }
}*/
//Generar numeros aleatoris

//Un programa que generi un aleatori del 1 al 10
//et demani un numero i et digui si el generat es mes 
//gran, mes petit o igual
//sol surti, quant sigui igual
let x = Math.random()*10 + 1; //si vull que sigui del 1 al 10 sumo 1 per 
//SALTAR EL 0
console.log(x);
x = Math.floor(x);
console.log(x);
let guessNumeric:number;
do
{
  let guess = prompt("Advinia un numero");
  guessNumeric = Number(guess);
  if (guessNumeric> x)
  {
    console.log("Es mes petit");
  }
  else if (guessNumeric<x)
  {
    console.log("Es mes gran");
  }
}while(guessNumeric!=x);

console.log("acertat");