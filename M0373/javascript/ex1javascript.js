function suma(n1,n2)
{
    return n1+n2;
}

function majorEdat(edad)
{
    if (edad>=18)
    {
        return "Ets major d'edat"
    }
    else
    {
        return "Ets menor de edat"

    }
}

var n1=5;
var n2=8;
console.log(suma(n1,n2));

let parragraf = document.getElementById("suma");
let sumar = suma(n1,n2);
parragraf.innerHTML = "El resultat de suma es " + sumar;

let majoredatDiv = document.getElementById("majoredat");
majoredatDiv.innerHTML= majorEdat(14);
let texte = majorEdat(21);
majoredatDiv.append(texte);