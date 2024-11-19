var gola = 4; /*global*/
let pepe =7;
var gola = 8;
const NUMERO_FIJO = 5;
gola = 111;

//NUMERO_FIJO =17; no es pot asignar nou variable
function imprimirConsola(texto_salida)
{
    texto_salida = texto_salida + " función";
    console.log(texto_salida);
    window.alert(gola);
    window.alert(pepe);
}


var num;
num=7;
var text_sortida = "FITXER JS :has ficat el " + num;
//console.log(text_sortida); /*per consola*/
window.alert(text_sortida);
document.write(text_sortida);
imprimirConsola(text_sortida);

