let ele_inner = document.getElementById("inner");
console.log(ele_inner);
ele_inner.innerHTML = "parragraf <b>canviat</b>";
let ele_outer = document.getElementById("outer");
ele_outer.outerHTML = "<ul><li>Opción1</li><li>Opcion2</li></ul>";
let innertext_ele = document.getElementById("text");
innertext_ele.innerText =  "parragraf <b>canviat</b>";