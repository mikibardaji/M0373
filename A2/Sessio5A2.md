# Documents JSON

Bibliografia:
  - [W3Schools Json](https://www.w3schools.com/js/js_json_intro.asp)
  - [Mozilla.org](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/JSON)


## Introducció al JSON

JSON, que significa JavaScript Object Notation, és un format lleuger d'intercanvi de dades que és fàcil de llegir i escriure per als humans, i fàcil d'analitzar i generar per a les màquines. S'utilitza comunament per transmetre dades entre un servidor i una aplicació web com a text.


### Regles de sintaxi JSON
La sintaxi JSON es deriva de la sintaxi de la notació d'objectes JavaScript:

- Les dades es troben en parells clau/valor.
- Les dades estan separades per comes tant clau, com valor.
- Les claus arrissades {} per definir  objectes.
- Els claudàtors [] tenen matrius.

#### Valors JSON
Eels valors han de ser un dels tipus de dades següents:

- string
- number
- boolean
- null
- array []
- objecte {}

```json
{
  "titol": "The Legend of Zelda: Breath of the Wild", /*string*/
  "desenvolupador": "Nintendo",
  "any_de_lliurament": 2017, /*number*/
  "es_multijugador": false, /boolea*/
  "punts_critics": null, /*null*/
  "platformes_disponibles": ["Nintendo Switch", "Wii U"], /*array*/
  "valoracio": { /*objecte*/
    "grafics": 9.5,
    "jugabilitat": 10,
    "historia": 9,
    "so": 9.2
  },
  "dlcs_disponibles": [ /*array d'objectes*/
    {
      "nom": "The Master Trials",
      "preu": 19.99,
      "data_de_sortida": "2017-06-30"
    },
    {
      "nom": "The Champions' Ballad",
      "preu": 19.99,
      "data_de_sortida": "2017-12-07"
    }
  ]
}
```

Quant creem un objecte a mà, per saber que el format es correcte podem utilitzar la web [jsonint](https://jsonlint.com/)

#### Convencions

Si volem representar alguna dada estandar, no tan convencional,  sempre s'utilitza el tipus **string**. Per que sigui unificat, seguirem la guia d’estil de Google respecte JSON  [JSON Style Guide](https://google.github.io/styleguide/jsoncstyleguide.xml).

**Dates**
```json
  "dateRegistered": "2014-03-01T23:46:11-05:00"
```

Per convertir un camp data al format String correcte hauriem d'utilitzar la funció toISOString().

```typescript
const esdeveniment: Esdeveniment = {
  titol: "Reunió de professors",
  data: new Date().toISOString(), // Converteix la data al format ISO 8601
};
```

  · Converteix la data a una cadena en format ISO 8601 (YYYY-MM-DDTHH:MM:SS.sssZ).
  · Exemple de sortida: "2025-02-17T22:45:00.123Z".

**Valors de latitud/longitud**
```json
  "empireStateBuilding": "40.748747-73.985547"
```
Aquest exemple segueix el format ±DD.DDDD±DDD.DDDD, amb les convencions següents:

* La latitud és el primer.
* La latitud/longitud es representa amb un string. No pot ser un nombre a causa del signe menys.
  
#### Avantatges Json respecte XML
Avantatges del JSON

+ *Simplicitat*: La seva sintaxi és fàcil d'entendre i escriure.
+ *Lleuger*: Consumeix menys ample de banda en comparació amb altres formats com XML.
+ *Interoperabilitat*: És compatible amb molts llenguatges de programació, no només JavaScript.

<a href="https://www.w3schools.com/js/js_json_xml.asp" target="_blank" rel="noopener noreferrer">Comparativa JSON vs xml</a>

**Exercici 1:** *Crear un objecte JSON que representi un estudiant amb les següents propietats: nom, edat, assignatures (array).
Per validar que es correcte utilitza la web que valida JSON*

[solució 1](https://github.com/mikibardaji/M0373/blob/main/A2/A2/Sessio5A2/estudiant.json)

**Exercici 2:** *Crear un objecte JSON que representi assignatures nom, cicle, hores_duracio i ara crea el tipus estudiant2, perque tingui un array d'objectes assignatura.*

[solució 2](https://github.com/mikibardaji/M0373/blob/main/A2/A2/Sessio5A2/estudiant2.json)

### Objecte Javascript vs JSON

S'escriu exactament igual que els objectes amb Javascript, excepte que les claus, amb JSON van entre "" i amb objecte NO.

**JSON**
```json
{
  "name": "Eva",
  "age": 3
}
```
**OBJECTE JS/TS**
```typescript
    name: "Eva",
    age: 3
```

### Conversió elements TSX a JSON i a la inversa

#### Convertir un objecte TypeScript a Json

*Objecte JS/TS a Json -- JSON.stringify*
```typescript
interface Coche {
    modelo: string;
    precio: number;
    esElectrico: boolean; }
const car: Coche =
              { modelo: "Renaul Clio",
                precio: 25,
                esElectrico: true };
console.log(car.precio); // 25

const jsonString: string = JSON.stringify(car);
console.log(jsonString);
```
#### Convertir un JSON a objecte TypeScript

*Json a Objecte JS/TS -- JSON.parse*
```typescript
interface Coche {
    modelo: string;
    precio: number;
    esElectrico: boolean; }
const jsonData = '{"modelo": "Citroen Picasso", "precio": 30, "esElectrico":false}';
const objecte: Coche = JSON.parse(jsonData);

console.log(objecte);
```

**Exercici 3:** *Crea una interface per poder passar aquest Json a objecte i després passa'l*

```typescript
const jsonGame = '{"name":"Mario Party","preu":20.35,"plataformes":["WII","Switch","PS5"]}';
```
[solució 3](https://github.com/mikibardaji/M0373/blob/main/A2/A2/Sessio5A2/exe3.ts)


**Exercici 4:** *Agafa les dades del Estudiant2 que hem fet a Json, assigna'l a una variable String i despres converteix-lo a objectes TypeScript.*

[solució 4](https://github.com/mikibardaji/M0373/blob/main/A2/A2/Sessio5A2/exe4.ts)

### Lectura de fitxers json local

Utilitzarem la funció **await Bun.file** com es veu al exemple 2

*dades.json*
```json
[
  { "nom": "Anna", "edat": 30 },
  { "nom": "Joan", "edat": 25 },
  { "nom": "Maria", "edat": 28 }
]
```

*llegir.ts*
```typescript
type Persona = {
  nom: string;
  edat: number;
};

const persones: Persona[] = [];
/Opció 1*/
try { 
  const data = await Bun.file("./persones.json").text(); // Llegir el fitxer JSON
  const parsedData: Persona[] = JSON.parse(data); // Parsejar el JSON

  persones.push(...parsedData); // Afegir els objectes a l'array
  console.log("Dades carregades correctament:", persones);
} catch (error) {
  console.error("Error en llegir el fitxer JSON:", error);
}

/*Opcio 2*/
```typescript
const persones: Persona[] = await Bun.file("./persones.json").json();

persones.forEach((persona, index) => {
   console.log(`Persona ${index + 1}: Nom: ${persona.nom}, Edat: ${persona.edat}`);
});
```

### Escritura objectes a fitxers Json

Utilitzarem la funció **await Bun.write* com es veu al exemple 2

```typescript
type Alumne = {
    nom: string;
    edat: number;
    curs: string;
  };
  
  const alumnes: Alumne[] = [
    { nom: "Anna", edat: 14, curs: "3r ESO" },
    { nom: "Joan", edat: 15, curs: "4t ESO" },
    { nom: "Maria", edat: 13, curs: "2n ESO" },
  ];
  
  // Guardar l'array en un fitxer JSON
    try {
      await Bun.write("alumnes.json", JSON.stringify(alumnes, null, 2));
      console.log("Alumnes guardats correctament a 'alumnes.json'");
    } catch (error) {
      console.error("Error en guardar els alumnes:", error);
    }
```

**Exercici 5:** 
*Busca a internet, quines opcions permet el stringify, com a segon i tercer paràmetre (en el nostre cas null i 2) i fes una prova de guardar les mateixes dades amb diferents opcions (amb fitxers diferents), on provoquis les diferents formes de gravar-ho.*

*[Solució](https://github.com/mikibardaji/M0373/blob/main/A2/A2/Sessio5A2/pregunta5.ts)*

**Exercici 6:**

· Crea un fitxer Json, on guardes jugadors (Esport que vulguis), on tindrà el atribut, nom, edat, i equip al que pertany, ficant de varis equips.
· Llegeix el fitxer, i mostra'ls per consola
· Un cop carregat a un array, mostra'l amb una pagina html i una taula, com vam fer  l'altra día. [objectes](https://github.com/mikibardaji/M0373/blob/main/A2/Sessio4A2.md)*

*[Solució](https://github.com/mikibardaji/M0373/blob/main/A2/A2/Sessio5A2/playersNBA.ts)*

**Exercici Aula:**

Realitza l'exercici de Vuelos Pajaro Bobo que es troba al [final de la wiki](https://xtec.dev/data/json/)

*[Solució falta incloure'l a html](https://github.com/mikibardaji/M0373/blob/main/A2/A2/Sessio5A2/flight.ts)*

