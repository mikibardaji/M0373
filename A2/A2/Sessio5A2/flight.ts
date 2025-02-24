type Passenger = {
    name: string;
    face: string;
  };
  
  type Location2 = {
    code: string;
    name: string;
    city: string;
    country: string;
  };
  
  type Plane = {
    name: string;
    seats: number;
  };
  
  type FlightData = {
    id: string;
    ufoSeen: boolean;
    plane: Plane;
    departure: Location2;
    arrival: Location2;
    passengers: Passenger[];
  };
  

//import { readFile, writeFile } from 'bun:fs';

// Llegim el fitxer JSON existent
const fileContent = await Bun.file("./flight.json").text(); 

// Convertim el contingut del fitxer a un objecte JavaScript
const vuelo: FlightData = JSON.parse(fileContent);

// Demanem les dades per al nou passatger
const newPassengerName = prompt("Introdueix el nom del nou passatger:");
const newPassengerFace = prompt("Introdueix la cara del nou passatger (ex: 🤗, 😄):");

// Afegim el nou passatger a la llista
/*const newPassenger = {
  name: newPassengerName,
  face: newPassengerFace
};*/
const pasajeros:Passenger = { 
    name:newPassengerName,
    face:newPassengerFace
};
vuelo.passengers.push(pasajeros);

// Convertim de nou l'objecte JavaScript a JSON
//const updatedFlightData = JSON.stringify(flightData, null, 2);

// Guardem les dades actualitzades al fitxer
await Bun.write("flightdata2.json", JSON.stringify(vuelo, null, 2));
//await writeFile('flightData.json', updatedFlightData);

console.log('Nou passatger afegit amb èxit!');