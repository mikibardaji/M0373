const box = document.getElementById('box');
const toggleBtn = document.getElementById('toggleBtn');

// Función para alternar la visibilidad de la caja
function toggleBox() {
  if (box.style.visibility === 'hidden') {
    //box.style.display = 'block';
    //box.style.hidden = 'true';
    box.style.visibility = "visible";
    toggleBtn.textContent = 'Ocultar Caja';
  } else {
    //box.style.display = 'none';
    //box.style.hidden = 'false';
    box.style.visibility = "hidden";
    toggleBtn.textContent = 'Mostrar Caja';
  }
}

// Agregar evento al botón para alternar la visibilidad de la caja
toggleBtn.addEventListener('click', toggleBox);