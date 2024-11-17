Sessions de Javascript.
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

Funció que selecciona un element del document, el que coincideixi amb el id.
#### Practica Guiada -> Al Ex1GetElementByID1 tenim una llista amb 4 items.
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

Serveix per seleccionar tots els elements inclosos a la funció.

#### Practica Guiada -> Ex2QuerySelectorAll
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

Selecciona el primer element que compleixi el criteri.

#### Passos sense el profesor -> Ex3QuerySelector.html

  1. Selecciona el primer element p i fica-la amb negreta (amb css es font-weight: bold;)
  2. Seleccionar el primer item de la llista i fica-la amb cursiva (amb css es font-style: italic;)

## Modificant propietats elements

#### Practica Guiada -> Ex4ModifyElements.html

### innerHTML

Per poder canviar  el contingut de dins del element HTML, per un altre codi HTML
  1.Seleccionar el element inner amb getElementById.
  2.Canviar-li el text per innerHTML "He canviat el text <b> negreta </b> "

### outerHTML
Per poder canviar  el element HTML
  1.Seleccionar el element outer amb getElementById.
  2.Canviar-lo deixar de ser parragraf i fer una llista no ordenada amb 2 items
      <ul><li>Item 1</li><li>Item 2</li></ul>

### innerText
Canviar el contingut de dins del element HTML, per texte pla.
  1. Seleccionar el element text amb getElementById.
  2. Posar a la propiedad innerText el mateix text que al innerHTML

**Altres modificacions**
  3. Al element inner afegir-li un text que pasa quant fiques el ratolí damunt, amb la propietat title.
  4. Al mateix element li puc afegir un id. inner.id ="IdNuevo"

### Saber si te atributs
  5. Pintar amb un alert si el element inner te atributs (hasAttributes())
  6. Pintar per consola, el id del element inner (getAtribute("id"));
  7. Ocultar el element outer.
