//import { readFile } from 'bun:fs';

// Definim el tipus per als jugadors
type Player = {
  name: string;
  age: number;
  team: string;
};

// Llegim el fitxer JSON amb informació sobre jugadors
const fileContent2 = await Bun.file("playersNBA.json").text(); 
//const fileContent = await readFile('players.json', 'utf-8');
    
// Convertim el contingut a un array d'objectes Player
const players: Player[] = JSON.parse(fileContent2);

// Mostrem els jugadors per consola
players.forEach((player) => {
    console.log(`Nom: ${player.name}, Edat: ${player.age}, Equip: ${player.team}`);
});