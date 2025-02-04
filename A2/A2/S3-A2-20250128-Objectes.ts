//teoria extreta de https://xtec.dev/typescript/object/
const mike: any = {}; //{} objecte

console.log(mike.name);
mike.name = "Miquel Angel";
console.log(mike.name);
const mallada: any = {
    name:  "Albert", //key:valor
    cognom: "Mallada",
    email: "amallada@gmail.com"
}
console.log(mallada.name);

console.log(mallada.cognom);
console.log(mallada);

//per obtenir les claus de cada camp put cridar Object.keys
console.log(Object.keys(mallada));
console.log(Object.keys(mike));

//per obtenir els valors de tots els camps Object.entries
console.log("Valors de Mallada " + Object.entries(mallada));

console.log(mallada["cognom"]);

for(const clau in mallada) //obtinc les claus i despres els valors
{
    console.log(mallada[clau]);
}

mallada.edat = 30; //afegir amb posterioritat un nou atribut

for(const clau in mallada) //obtinc les claus i despres els valors
{
    console.log(mallada[clau]);
}

//exercici 
/*Crea un objecte user buit.
Afegeix la propietat name amb el valor John.
Afegeix la propietat surname amb el valor Smith
Modifica el valor de name a Pete.
Afegeix una adreça
mostra'm els valors de tots els camps */
let user: any = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
user.adresa = "Plaça Sants"
for(const clau in user) //obtinc les claus i despres els valors
{
    console.log(user[clau]);
}

//Tenim un objecte que emmagatzema el salaris del nostre equip:
//Escriu el codi per sumar tots els salaris i emmagatzemar el resultat a la variable result. 
const salaries:any = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let resultat:number=0;
for(const key in salaries)
{
    resultat += salaries[key];
}
console.log(resultat);