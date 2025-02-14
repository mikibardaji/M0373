# Documents JSON

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

Quant creem un objecte a mà, per saber que el format es correcte podem utilitzar [jsonint](https://jsonlint.com/)

####Convencions

Si volem representar alguna dada estandar, no tan convencional sempre s'utilitza **string**. Per que sigui unificat, seguirem la guia d’estil de Google respecte JSON  [JSON Style Guide](https://google.github.io/styleguide/jsoncstyleguide.xml).

**Dates**
```json
  "dateRegistered": "2014-03-01T23:46:11-05:00"
```

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

**Exercici 1:**
Crear un objecte JSON que representi un estudiant amb les següents propietats: nom, edat, assignatures (array).

Per validar que es correcte utilitza la web que valida JSON

**Exercici 2:**
Crear un objecte JSON que representi assignatures nom, cicle, hores_duracio i ara crea el tipus estudiant2, perque tingui un array d'objectes assignatura.


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

**Exercici**

Agafa la variable del primer exercici estudiant i passa'l a JSON, fes el mateix pel segon.

**Exercici**
Crea una interface per poder passar aquest Json a objecte i després passa'l

```typescript
const jsonGame = '{"name":"Mario Party","preu":20.35,"plataformes":["WII","Switch","PS5"]}';
```
