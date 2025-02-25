import Ajv from "ajv"

const productSchema2 = 
{
    type: "object",
    properties: {
        id: {type:"integer"},
        name: {type:"string"}
    },
    required: ["id","name"]
}

const ajv = new Ajv()
const validateProduct = ajv.compile(productSchema2)
//validateProduct es el objecte que validara tots els json
//basantse amb el schema que li has passat productSchema2

const apple = {"id":1, "name":"apple"}

if (validateProduct(apple)) 
    {
     console.log("objecte valid")   
    }//true/false
else
    {
        console.log("No passa validació")
    }

const watermelon = {"id":1, "nick":"watermelon"}

if (validateProduct(watermelon)) 
    {
     console.log("objecte valid")   
    }//true/false
else
    {
        console.log("No passa validació")
    }

const cherry = {"id":"3", "name":"cherry"}
if (validateProduct(cherry)) 
    {
     console.log("objecte valid")   
    }//true/false
else
    {
        console.log("No passa validació")
    }

const banana = {"id":3, "name":"banana", "description":"banana of canarias"}
    if (validateProduct(banana)) 
        {
         console.log("objecte valid")   
        }//true/false
    else
        {
            console.log("No passa validació")
        }