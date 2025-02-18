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