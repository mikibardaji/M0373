import Ajv from "ajv"

const productSchema = {
    type: "object",
    properties: {
        id: { type: "integer" },
        name: { type: "string" }
    },
    required: ["id", "name"]
}

const ajv = new Ajv()
const validateProduct = ajv.compile(productSchema)

const apple = { "id": 1, "name": "apple" }

if (!validateProduct(apple)) {
    console.log("apple is not an apple 🤨")
} else {
    console.log("Let's eat the 🍎")
}


const apple2 = { "id": "1", "name": "apple" }

if (!validateProduct(apple2)) {
    console.log("apple is not an apple 🤨")
} else {
    console.log("Let's eat the 🍎")
}