type Person = {
    name: string,
    age: number
}

let str = '{ "name": "Eva", "age": 33}'

let person: Person = JSON.parse(str)

console.log(person.name)