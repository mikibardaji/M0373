//conexió APIREST
/* Pas 1 sense type definits
const response = await fetch('https://jsonplaceholder.typicode.com/users');
const users = await response.json();
console.log(users);
console.log(users.map((user: {name:string}) => user.name));*/

//Pas 2 type definits previament
import type {User} from "./typicode"

const response = await fetch('https://jsonplaceholder.typicode.com/users');
const users: User[] = await response.json();

console.log(users.map(user => user.company.name));