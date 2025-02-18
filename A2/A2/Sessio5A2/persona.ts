//"nom": "Anna", "edat": 30 
type Persona =
{
    nom: string;
    edat: number;
};

//ruta relativa desde el ts a trobar el json
// en aquest cas estic al mateix directori
const persones: Persona[] = await Bun.file("./persona.json").json();

persones.forEach((persona,index) => 
{
    console.log(`Persona ${index+1}: Nom: ${persona.nom}, edat:${persona.edat}`);
});

console.log(persones);
