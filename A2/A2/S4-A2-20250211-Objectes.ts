//la teoria la treiem de https://github.com/mikibardaji/M0373/blob/main/A2/Sessio4A2.md
// i també de la wiki https://xtec.dev/typescript/object/


//type es mes flexible NO POT TENIR METODES
//fixar el tipus d'atributs
//no podran canviarse
type Direccio = 
{
    carrer: string;
    ciutat: string;
    codiPostal: number;
}

type Persona =
{
    nom: string;
    edat: number;
    direccio?: Direccio; //opcional que pots definir objectes sense aquest camp
}

const alumne: Persona =
{
    nom: "Albert",
    edat: 18,
    direccio: {
        carrer: "Carrer Provençana",
        ciutat: "Hospitalet",
        codiPostal: 8028  
    }
};

console.log(alumne);

//Interface similar a type i permet definir mètodes
interface Animal
{
    nom: string;
    especie: string;
    ferSoroll(): void;
};

const gos:Animal =
{
    nom: "Rex",
    especie: "gos",
    ferSoroll()
    {
        console.log("Guau Guau!");
    }
};

const gat:Animal =
{
    nom: "Doraemon",
    especie: "Gat Cosmic",
    ferSoroll()
    {
        console.log("Miau miau!");
    }
};

console.log(gos);
gos.ferSoroll();
console.log(gat);
gat.ferSoroll();
// definició arrays d'objectes
type Alumne = {
   nom: string;
   edat: number;
}

const llistatAlumnes: Alumne[] = [
    { nom: "Roser", edat:18},
    { nom: "Toni", edat:20},
    { nom: "Mallada", edat:22}
];

console.log(llistatAlumnes[1]);
llistatAlumnes.push({ nom: "Miquel Angel", edat:28})
for(const student of llistatAlumnes)
{
    console.log("----")
    console.log(student);
    for(const clau in student) //obtinc les claus i despres els valors
    {
    console.log(student[clau]);
    }
};

/*
llistatAlumnes.forEach((student1) =>
{
    console.log(student1);
})*/
//Definicio 3 objectes Class
class Llibre
{ //no es defineixen els atributs
//es defineixen al constructor
  constructor(public titol: string, public autor: string, public anyPublicacio: number)
  {}

  descripcio(): string {
    return this.titol + " - " + this.autor + " - " + this.anyPublicacio;
  }

}

const book = new Llibre("La historia interminable", "Michael Ende", 1950);
console.log(book.descripcio());

//Exercici

interface Producte {
    nom: string;
    preu: number;
    stock: number;
  }

  class Botiga {
    private productes: Producte[] = [];
  
    afegirProducte(producte: Producte) {
      this.productes.push(producte);
    }
  
    mostrarProductes() {
      this.productes.forEach((p) => console.log(`${p.nom}: ${p.preu}€ (Stock: ${p.stock})`));
    }

    vendaProducte(nom: string, numVenta: number) {
        const producte = this.productes.find((p) => p.nom === nom);
        
        if (producte) {
          if (numVenta <= producte.stock) {
            producte.stock -= numVenta;
            console.log(`Venda realitzada: ${numVenta} unitats de ${nom} venudes.`);
          } else {
            console.log(`No hi ha prou stock de ${nom}. Disponibles: ${producte.stock}, sol·licitades: ${numVenta}.`);
          }
        } else {
          console.log(`Producte ${nom} no trobat.`);
        }
      }

      vendaProducteFilter(nom: string, numVenta: number){
        // Utilitzem filter per trobar els productes amb el mateix nom
        const productesFiltrats = this.productes.filter((p) => p.nom === nom);
        
        // Si hi ha productes filtrats
        if (productesFiltrats.length > 0) {
          const producte = productesFiltrats[0]; // Agafem el primer producte que coincideix
    
          if (numVenta <= producte.stock) {
            producte.stock -= numVenta;
            console.log(`Venda realitzada: ${numVenta} unitats de ${nom} venudes.`);
          } else {
            console.log(`No hi ha prou stock de ${nom}. Disponibles: ${producte.stock}, sol·licitades: ${numVenta}.`);
          }
        } else {
          console.log(`Producte ${nom} no trobat.`);
        }
      }
  }  

//main execucio
const botiga = new Botiga();
botiga.afegirProducte({ nom: "Mòbil", preu: 400, stock: 10 });
botiga.afegirProducte({ nom: "Portàtil", preu: 1200, stock: 5 });

botiga.mostrarProductes();

botiga.vendaProducte("Mòbil", 3);

botiga.mostrarProductes();

botiga.vendaProducteFilter("Mòbil", 3);
console.log("Filter");
botiga.mostrarProductes();
