let items_list = document.querySelectorAll("li");
//console.log(items_list);
for(let i=0;i < items_list.length;i++)
{
    console.log("posicio " + i);
    console.log(items_list[i]);
    if (i==1 || i==2)
    {
        items_list[i].style.color="orange";
        items_list[i].innerHTML ="Opcion cambiada";
    }
}