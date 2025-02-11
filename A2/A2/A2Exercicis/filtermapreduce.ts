const usernames = ["alice", "bob", "charlie", "dave", "eve", "frank"];

// 1. Filtrar noms d'usuari amb més de 5 caràcters
const filteredUsernames = usernames.filter(username => username.length > 4);

// 2. Convertir els noms d'usuari filtrats a majúscules
const uppercaseUsernames = filteredUsernames.map(username => username.toUpperCase());

let accumulator = "noms";
// 3. Combinar els noms en una única cadena separada per comes
const combinedUsernames = uppercaseUsernames.reduce((accumulator, username, index) => {
  // Afegir una coma si no és el primer element
  return index === 0 ? "noms" + username : accumulator + ", " + username;
}, "----");

console.log(combinedUsernames);

const combinedUsernames2 = uppercaseUsernames.reduce((accumulator, username) => {
    // Afegir una coma si no és el primer element
    return  accumulator + ", " + username;
  }, "----");

  console.log(combinedUsernames2);
