let edad = prompt("Indica tu edad para saber si puedes votar","Debes tener almenos 18");
let edadCorrecta = confirm("Edad introducida correcta? ("+ edad + ")");
if (Number(edad)>=18 &&  edadCorrecta)
{
    console.log("Puedes ir a votar");
}
else
{
    console.log("Aún no puedes");
}