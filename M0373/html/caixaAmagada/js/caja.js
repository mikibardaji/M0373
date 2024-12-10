const caixa = document.getElementById('box');
const boto = document.getElementById('toggleBtn');
const change = document.getElementById('changeBoton');

function amagarDescobrirCaixa()
{
    if (caixa.style.visibility === 'hidden')
    {
        caixa.style.visibility = "visible";
        boto.textContent = "Ocultar Caja";
    }
    else
    {
        caixa.style.visibility = "hidden";
        boto.textContent = "Mostrar Caja";
    }

}

function cambiar()
{
    caixa.textContent = 'cambiado';
    caixa.classList.add('color');
}


boto.addEventListener('click', amagarDescobrirCaixa);

change.addEventListener('click',cambiar);