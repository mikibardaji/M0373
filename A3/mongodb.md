# CONECTAR TS AMB MONGODB

Crea un projecte amb Bun:

    mkdir monogdb
    cd monogdb
    bun init -y


Afegeix una dependència amb mongodb:

  > bun add mongodb

### Import client
Al iniciar tenim que afegir la llibreria que ens dona el client que atacarà al servidor

    >import {MongoClient} from "mongodb"

Un cop feta aquesta part, tenim que ficar la direcció del servidor, i obrir un pont/client

    >const uri = "mongodb://localhost:27017" //per exemple
    >const client = new MongoClient(uri) //creem el client que te la connexió

Bones pràctiques, no es olbigatori, pero si el script sempre te que atacar una colleccion al iniciar fixar-la

    >    const database = client.db('ocean')
    >    const fish = database.collection('fish')

