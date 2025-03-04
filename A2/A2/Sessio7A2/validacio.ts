import Ajv from "ajv"
import type {User} from "./typicode"
import userSchema from "./typicode.json"


const response = await fetch('https://jsonplaceholder.typicode.com/users');
const users: User[] = await response.json();

const ajv = new Ajv()
const validateUser = ajv.compile(userSchema)
users.forEach(user => {
    const valid = validateUser(user); //true o false
    if (!valid)
    {
        console.log("Errors ", validateUser.errors);
    }
    else
    {
        console.log(user.name);
    }
});