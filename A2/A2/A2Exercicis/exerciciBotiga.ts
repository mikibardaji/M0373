// Definició de la interfície Producte
interface Producte {
    nom: string;
    preu: number;
    stock: number;
  }
  
  // Classe Botiga que gestiona els productes
  class Botiga {
    private productes: Producte[] = [];
  
    // Afegeix un producte a la botiga
    afegirProducte(producte: Producte): void {
      //revisar i fer un find si el troba sol cal afegir stock i no fer push
      this.productes.push(producte);
    }
  
    // Mostra tots els productes disponibles a la botiga
    mostrarProductes(): void {
      console.log("\nProductes disponibles a la botiga:");
      this.productes.forEach((p) =>
        console.log(`${p.nom}: ${p.preu}€ (Stock: ${p.stock})`)
      );
    }
  
    // Simula la compra d'un producte utilitzant filter i aplicant la compra a tots els productes trobats
    //per si de cas hi hagues dos o mes stocks
    comprarProducte(nom: string, quantitat: number): void {
      let productesFiltrats = this.productes.filter((p) => p.nom === nom);
      
      if (productesFiltrats.length === 0) {
        console.log(`El producte "${nom}" no es troba a la botiga.`);
        return;
      }
  
      let restant = quantitat; // Quantitat restant a descomptar
  
      for (let producte of productesFiltrats) {
        if (restant === 0) break; // Si ja hem descomptat tota la quantitat, sortim
  
        if (producte.stock >= restant) {
          producte.stock -= restant;
          restant = 0; // Ja hem cobert tota la compra
        } else {
          restant -= producte.stock;
          producte.stock = 0; // Aquest producte esgota tot el seu stock
        }
      }
  
      if (restant > 0) {
        console.log(
          `No hi havia prou stock per completar la compra de ${quantitat} unitats de "${nom}".`
        );
      } else {
        console.log(`S'han comprat ${quantitat} unitats de "${nom}".`);
      }
    }
  }
  
  // Creació de la botiga
  const botiga = new Botiga();
  
  // Afegim diversos productes a la botiga, alguns amb el mateix nom però diferents stocks
  botiga.afegirProducte({ nom: "Mòbil", preu: 400, stock: 5 });
  botiga.afegirProducte({ nom: "Mòbil", preu: 400, stock: 3 });
  botiga.afegirProducte({ nom: "Portàtil", preu: 1200, stock: 5 });
  botiga.afegirProducte({ nom: "Tablet", preu: 300, stock: 8 });
  botiga.afegirProducte({ nom: "Auriculars", preu: 50, stock: 10 });
  botiga.afegirProducte({ nom: "Auriculars", preu: 50, stock: 10 });
  
  // Mostrem els productes abans de les compres
  botiga.mostrarProductes();
  
  // Simulem la compra de productes
  console.log("\n--- Compra de productes ---");
  botiga.comprarProducte("Mòbil", 7);  // Ha de gastar l'stock dels dos mòbils
  botiga.comprarProducte("Auriculars", 15); // Ha de gastar l'stock dels dos productes
  botiga.comprarProducte("Tablet", 3);
  botiga.comprarProducte("Smartwatch", 1);  // Producte no existent
  
  // Mostrem els productes després de les compres
  console.log("\n--- Estat de la botiga després de les compres ---");
  botiga.mostrarProductes();
  
