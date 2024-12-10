// Seleccionar elementos del DOM
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Función para agregar una nueva tarea
function addTask() {
  // Obtener el valor del input
  const taskText = newTaskInput.value;

  // Verificar que el campo no esté vacío
  if (taskText) {
    // Crear un nuevo elemento de lista (li)
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Crear botón para eliminar la tarea
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';

    // Agregar evento al botón para eliminar la tarea
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });


    //  Agregar la clase deleteBtn al botón de eliminar
    deleteButton.classList.add('deleteBtn');        // Agregar el botón al elemento de lista
    taskItem.appendChild(deleteButton);

    // Agregar la tarea a la lista
    taskList.appendChild(taskItem);

    // Limpiar el campo de texto después de agregar la tarea
    newTaskInput.value = '';
  }
}

// Agregar evento al botón de agregar tarea
addTaskBtn.addEventListener('click', addTask);