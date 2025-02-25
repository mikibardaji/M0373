type Person = {
    name: string,
    age: number
    address: Address 
}

type Address = {
    street: string,
    city: string
}

let str = '{"brand": "Seat", "model": "Ibiza"}'

let person: Person = JSON.parse(str)

console.log(person.address.city)