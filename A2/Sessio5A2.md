# Documents JSON

## Introducció al JSON

JSON, que significa JavaScript Object Notation, és un format lleuger d'intercanvi de dades que és fàcil de llegir i escriure per als humans, i fàcil d'analitzar i generar per a les màquines. S'utilitza comunament per transmetre dades entre un servidor i una aplicació web com a text.


### Regles de sintaxi JSON
La sintaxi JSON es deriva de la sintaxi de la notació d'objectes JavaScript:

- Les dades es troben en parells nom/valor
- Les dades estan separades per comes
- Les claus arrissades {} per definir  objectes
- Els claudàtors [] tenen matrius

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

#### Avantatges Json respecte XML
Avantatges del JSON

+ Simplicitat: La seva sintaxi és fàcil d'entendre i escriure.
+ Lleuger: Consumeix menys ample de banda en comparació amb altres formats com XML.
+ Interoperabilitat: És compatible amb molts llenguatges de programació, no només JavaScript.

<a href="https://www.exemple.com](https://www.w3schools.com/js/js_json_xml.asp" target="_blank" rel="noopener noreferrer">Comparativa JSON vs xml</a>





