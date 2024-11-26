//per canviar color de fons del event que ha capturat el event
function changeColorBackground(e)
{
    //e es el element hrml que ha capturat l'event
    //coses a canviar
    console.log("estic dins de la funció changeColorBackground");
    e.target.style.backgroundColor = "red";
    e.target.style.color = "blue";
}

function changeColorListener(e)
{
    console.log("estic dins de la funció changeColorListener");
    e.target.style.color = "red";
}

let elementHTML = document.getElementById("listener");
/* eventlistener (eventoCapturar,funcionRealizar) */
elementHTML.addEventListener("click", changeColorListener);
let elementHTML2 = document.getElementById("listener2");


elementHTML2.addEventListener("click", e => {
    console.log("listener2");
    e.target.style.color = "green";
    e.target.style.backgroundColor = "black";
});

//quant moguem el ratoli escriurem les seves coordenades a les etiquetes span
//del codi html

function showMousePosition(e)
{
    let var_x = document.getElementById("X");
    let var_y = document.getElementById("Y");
    var_x.textContent = e.pageX;
    var_y.textContent = e.pageY;
}

document.querySelector("html").addEventListener("mousemove", showMousePosition);

let boton = document.getElementById("stop");

boton.addEventListener("click",e => {
    document.querySelector("html").removeEventListener("mousemove", showMousePosition); 
}
);

/*
function dropMouseOver(e)
{
    document.querySelector("html").removeEventListener("mousemove", showMousePosition);
}
*/

//boton.addEventListener("mouseover", dropMouseOver);