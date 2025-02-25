type Person = {
    name: string,
    age: number
}

let str = '{"brand": "Seat", "model": "Ibiza"}'

let person: Person = JSON.parse(str)
console.log(person)
console.log(person.name)
console.log(person.brand)