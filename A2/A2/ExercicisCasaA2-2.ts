/*
Suposa que tens un array amb noms d'usuari d'una plataforma.
 Volem realitzar les següents tasques:

Filtrar els noms d'usuari que tenen més de 5 caràcters.
Transformar aquests noms d'usuari a majúscules.
Combinar tots els noms transformats en una única cadena de text, 
separats per una coma, utilitzant reduce.
Dades d'entrada
filter/map/reduce
*/
const usernames = ["Raul", "Constantí", "Pol", "Maria", "Aitana", "Carles"];

const namesValid = usernames.filter(username =>username.length>5 );
console.log(namesValid);

const namesMajus = namesValid.map(username => username.toUpperCase());
console.log(namesMajus);

const namesCombinats = 
namesMajus.reduce((accumulator,username, index) => {return index===0 ? "noms" + username: accumulator+", " +username;"---"}  );

console.log(namesCombinats);