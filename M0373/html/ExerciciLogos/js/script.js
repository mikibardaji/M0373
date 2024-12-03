//let boostrapImage = document.getElementById("id_boostrap");
//console.log(boostrapImage);

/*boostrapImage.addEventListener("click", e => {
    let imgPrincipal = document.getElementById("principal");
  //  console.log(imgPrincipal);
    imgPrincipal.setAttribute("src", e.target.getAttribute("src"));
})*/
/*
boostrapImage.addEventListener("click",changeImage);


function changeImage(e)
{
  let imgPrincipal = document.getElementById("principal");
  console.log("principal");
  //  console.log(imgPrincipal);
    imgPrincipal.setAttribute("src", e.target.getAttribute("src"));
}

let jsImage = document.getElementById("id_js");

jsImage.addEventListener("click",changeImage);

let jsHtmlImage = document.getElementById("id_html");
jsHtmlImage.addEventListener("click",changeImage);
*/

let imagesAll = document.querySelectorAll("#images img");
console.log(imagesAll);

imagesAll.forEach(imatge =>{
    imatge.addEventListener("click",changeImage)

})

function changeImage(e)
{
  let imgPrincipal = document.getElementById("principal");
  imgPrincipal.setAttribute("src", e.target.getAttribute("src"));
}
 
     //asiganr a una variable
     //window.getComputedStyle(event.target).backgroundColor;
    //falta alguna cosa style.borderColor = color a asignar;

let divRojo = document.getElementById("rojo");

divRojo.addEventListener("click", changeBorder);

function changeBorder(e)
{
    //averiguar color
    let color = window.getComputedStyle(e.target).backgroundColor;
    let picturePrincipal = document.getElementById("picture");
    picturePrincipal.style.borderColor = color;
    console.log("nova versio");
}

let divBackgrounds = document.querySelectorAll(".colors div");
console.log(divBackgrounds);


divBackgrounds = addEventListener("click", changeBorder);
/*
divBackgrounds.forEach(bloque =>
{
    bloque.addEventListener("click", changeBorder);
}
)*/
let zoomIn = document.getElementById("in");
console.log(zoomIn);

zoomIn.addEventListener("click",acercar);

function acercar(e)
{
    let imgprincipal = document.getElementById("principal");
    let dim = imgprincipal.offsetWidth;
    console.log(dim);
    imgprincipal.style.width = (dim+10) + "px";
    imgprincipal.style.height = (dim+10) + "px";s
}

// imatge offsetWidth (console.log)


/*

let sourceImages = document.querySelectorAll("#images img");
console.log(sourceImages);

let sourceImages2 = document.querySelectorAll("#images");
console.log("images");
console.log(sourceImages2);*/