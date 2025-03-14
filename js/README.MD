Sessions de Javascript.

### [PRESENTACIÓ JAVASCRIPT](https://docs.google.com/presentation/d/1RytX2_Asf3xn5Le2XBzWdX69Wx8ZuiWNhfrWFZqh5n4/edit?usp=sharing)


> ### Introducció Javascript
> >  > 1. [Declaració JavaScript dins document HTML](https://www.w3schools.com/js/js_whereto.asp)
> >  > 2. [Sortides resultats](https://www.w3schools.com/js/js_output.asp)
> >  > 3. [Declaració de variables](https://www.w3schools.com/js/js_statements.asp)
> >  > 4. [Tipus de dades javascript](https://www.w3schools.com/js/js_datatypes.asp)
> >  > 5. [Declaració de funcions](https://www.w3schools.com/js/js_functions.asp)
> >  > 6. [Objectes](https://www.w3schools.com/js/js_objects.asp)
> >  > 7. [Arrays](https://www.w3schools.com/js/js_arrays.asp)

# EXERCICIS EXEMPLES

## Selecció elements

### getElementById

Funció que selecciona un element del document, el que coincideixi amb el id. [getElementById teoria](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
#### Practica Guiada -> Al [Ex1GetElementByID1.html](https://github.com/mikibardaji/M0373/blob/main/js/Ex1GetElementByID1.html) tenim una llista amb 4 items.
  1. Posar al tercer element un id, de nom *special*
  2. A la part de script, crear una variable que apunti a aquest element.
  3. Canviarli el text a vermell
  4. Seleccionar un element amb id no existent **inventat**
  5. Si esta a null, saltar un alert avisant.
##### Passos sense el profesor 
Podeu comentar el codi que vulgueu dels passos anteriors.

  4. Canviar-li el tamany de lletra.
  5. Agafar un altre item i canviar-li a un color diferent.
  6. Agafar un tercer item i ficar-lo ocult amb la propietat hidden.

### querySelectorAll

Serveix per seleccionar tots els elements inclosos a la funció. [querySelectorAll teoria](https://www.w3schools.com/jsref/met_document_queryselectorall.asp)

#### Practica Guiada -> [Ex2QuerySelectorAll](https://github.com/mikibardaji/M0373/blob/main/js/Ex2QuerySelector.html)
  1. Seleccionar tots els elements li del document en una variable.
  2. Utilizar console.log, per veure la variable.
  3. Afegir-li un id a un dels li
  4. Tornar a executar-ho i veiem les diferencies.
  5. Recorrer el array, i canviar-li la font (For standar)
  6. Recorrer el array, amb for (const item of XXXX)
##### Passos sense el profesor 
  7. Seleccionar tots els parragrafs.
  8. Canviar-li el color a tots
  9. Als parells canviar-li el color de fons.
  10. Afegir 2 parragrafs més i provar que segueix funcionant.

### querySelector

Selecciona el primer element que compleixi el criteri. [querySelector teoria](https://www.w3schools.com/jsref/met_document_queryselector.asp)

#### Passos sense el profesor -> [Ex3QuerySelector.html](https://github.com/mikibardaji/M0373/blob/main/js/Ex3QuerySelector.html)

  1. Selecciona el primer element p i fica-la amb negreta (amb css es font-weight: bold;)
  2. Seleccionar el primer item de la llista i fica-la amb cursiva (amb css es font-style: italic;)

## Modificant propietats elements

#### Practica Guiada -> [Ex4ModifyElements.html](https://github.com/mikibardaji/M0373/blob/main/js/Ex4ModifyElements.html)

### innerHTML

Per poder canviar  el contingut de dins del element HTML, per un altre codi HTML  [innerHTML teoria](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

  1.Seleccionar el element inner amb getElementById.

  2.Canviar-li el text per innerHTML "He canviat el text <b> negreta </b> "

### outerHTML
Per poder canviar  el element HTML. [outerHTML teoria](https://www.w3schools.com/jsref/prop_html_outerhtml.asp)
  1.Seleccionar el element outer amb getElementById.
  2.Canviar-lo deixar de ser parragraf i fer una llista no ordenada amb 2 items
      <ul><li>Item 1</li><li>Item 2</li></ul>

### innerText
Canviar el contingut de dins del element HTML, per texte pla. [innerText teoria](https://www.w3schools.com/jsref/prop_node_innertext.asp)
  1. Seleccionar el element text amb getElementById.
  2. Posar a la propiedad innerText el mateix text que al innerHTML

**Altres modificacions**

  3. Al element inner afegir-li un text que pasa quant fiques el ratolí damunt, amb la propietat title.
  4. Al mateix element li puc afegir un id. inner.id ="IdNuevo"

### Saber si te atributs
  5. Pintar amb un alert si el element inner te atributs [hasAttributes()](https://www.w3schools.com/jsref/met_node_hasattributes.asp) 
  6. Pintar per consola, el id del element inner [getAtribute("id");](https://www.w3schools.com/jsref/met_element_getattribute.asp)
  7. Ocultar el element outer.


### Exercicis per casa

[Casa](https://docs.google.com/document/d/1lQx2n_pvOcQEtJ_pA2IESeS1O0paxFsIs6TCocuJogE/edit?usp=sharing)


## Events

[Pagines 26 a 33 presentació](https://docs.google.com/presentation/d/1RytX2_Asf3xn5Le2XBzWdX69Wx8ZuiWNhfrWFZqh5n4/edit?usp=sharing) 

### Capturant Events

#### Practica Guiada -> [Ex5EventsCaptur](https://github.com/mikibardaji/M0373/blob/main/js/Ex5EventsCaptur.html) i el seu [CSS](https://github.com/mikibardaji/M0373/blob/main/js/ExEventsCaptur.css)

##### Captura inline
  1. Crear funció **changeColor** amb 2 accions:

    a. Escriure per consola o per alert, "funció capturada"
    b. Canviar el color de fons al event.
  2. Al primer div captura l'event amb la targe onclick

##### Captura amb listener
  3. Crear una funció changeColorFontBackground amb 3 accions:

    a. Escriure per consola o per alert, "funció capturada listener"
    b. Canviar el color de fons al event.
    c. Canviar el color de la lletra.
  4. Capturar element amb script listener
  5. Afegir-li addEventListener, al element.

##### Borrar amb listener
  6. Crear la funció showMousePosition
     a. Capturar la posició X e Y del ratoli.
     b. Escriure posició elements html.
  7. Afegir listener a tot el html, la funció.
  8. Ficar click al element html, per borrar el listener del punt 7.

### Exercicis per casa

[Casa](https://docs.google.com/document/d/1KGqJ8hJJLwAn_us4zwjj7JDDqCQfRVSAnfj0j30bmUo/edit?usp=sharing)

### Exercicis per casa pel dia 10/12

[Casa 2](https://docs.google.com/document/d/1zWer2HqNvR0rzVO0keIpHjfrm2vkIC1j3IQ2CroORM8/edit?usp=sharing)

##### Afegir i treure clase

  [classList add/remove](https://desarrolloweb.com/faq/como-anadir-y-quitar-una-clase-css-de-un-elemento-mediante-javascript)


## Boostrap JS

Al igual que boostrap amb CSS hi ha elements especifics Javascript i boostrap també hi ha elements creats per fer més atractives les pagines web.

  1. [Carrousel](https://getbootstrap.com/docs/5.3/components/carousel/)
  2. [Collapse](https://getbootstrap.com/docs/5.3/components/collapse/)
  3. [Dropdown](https://getbootstrap.com/docs/5.3/components/dropdowns/)
  4. [Modal](https://getbootstrap.com/docs/5.3/components/modal/)
  5. [Barra navegacion](https://getbootstrap.com/docs/5.3/components/navbar/)
  6. [ScrollSpy](https://getbootstrap.com/docs/5.3/components/scrollspy/)
  7. [Toast](https://getbootstrap.com/docs/5.3/components/toasts/)

N'hi ha més pero amb aquests es suficient.

## Arrays

  a. [Arrays](https://www.w3schools.com/js/js_arrays.asp)
  b. [Metodes Arrays: length, toString, at, join, ....](https://www.w3schools.com/js/js_array_methods.asp)
  c. [Busqueda](https://www.w3schools.com/js/js_array_search.asp)
  d. [Metodes interessants](https://dev.to/gastondanielsen/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d)

## Objectes

  a.[Objectes](https://www.w3schools.com/js/js_objects.asp)
  b.[Propietats Objectes](https://www.w3schools.com/js/js_object_property.asp)
