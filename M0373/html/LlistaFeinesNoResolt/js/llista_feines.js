const tasklist = document.getElementById('taskList');
const boto = document.getElementById('addTaskBtn');
const taskNew = document.getElementById('newTaskInput');

function afegirTaska()
{
   //recuperar valor entrat
   const tasca = taskNew.value;
   //window.alert(tasca);

   const taskItem = document.createElement('li');
   taskItem.textContent = tasca;
//abans d'afegir crearem un boto que el ficarem al element
   const deleteBoto = document.createElement('button');
   deleteBoto.textContent = 'X';

   //afegeixo listener al boto creat
   deleteBoto.addEventListener('click', () =>{
    taskItem.remove();
   })

   //al boto li afegeix la classe CSS deleteBtn
   deleteBoto.classList.add('deleteBtn');
   //al item li afegeixo el boto
   taskItem.appendChild(deleteBoto);

   tasklist.appendChild(taskItem);
   taskNew.value = '';

}


boto.addEventListener('click',afegirTaska);