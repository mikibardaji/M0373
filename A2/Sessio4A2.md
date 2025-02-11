# Sessions A4 Objectes i compilació TypeScript a JS
### Teoria WIKI

Ens basem amb la [wiki objectes](https://xtec.dev/typescript/object/)


# Objectiu  

**Com es defineixen i utilitzen els objectes en TypeScript.**  

## 1. Introducció als objectes en TypeScript 
### Millores respecte a JavaScript  
- **Tipatge estàtic vs. dinàmic**  
- **Més seguretat i menys errors en temps d'execució**  

### Interfícies i tipus personalitzats  
- Permeten crear interfícies i tipus que defineixen clarament l'estructura de l'objecte.  
- Faciliten la comprensió del codi i garanteixen que els objectes segueixin unes regles establertes.  
- Milloren la qualitat del codi i la seva mantenibilitat.  

### Documentació  
- Les interfícies i els tipus en TypeScript actuen com una forma de **documentació implícita**.  
- Qualsevol persona que llegeixi el codi sabrà immediatament:  
  - Quines propietats tenen els objectes.  
  - Quins tipus de dades s'esperen.  
- Això millora la llegibilitat i redueix errors.  
## 2. Definició d'objectes en TypeScript: `type` vs `interface`  

### 💡 Diferència clau:  
- **`type`** es fa servir per a conjunts de dades més flexibles (pot combinar tipus).  
- **`interface`** és més recomanada per definir objectes i estructures reutilitzables.  

### Exemple amb `type` (més flexible, pot combinar tipus)  

```typescript
type Direccio = {
  carrer: string;
  ciutat: string;
  codiPostal: number;
};

type Persona = {
  nom: string;
  edat: number;
  direccio?: Direccio;
};

const alumne: Persona = {
  nom: "Maria",
  edat: 22,
  direccio: {
    carrer: "Carrer Major",
    ciutat: "Barcelona",
    codiPostal: 08001
  }
};
```

📌 **Aquí hi ha definit una estructura de `Persona` i `Direccio` amb `type`, i el atribut de `direccio` és opcional.**  

## Exemple amb `interface` (més estructurada, pensada per a objectes)  

```typescript
interface Animal {
  nom: string;
  especie: string;
  ferSoroll(): void;
}

const gos: Animal = {
  nom: "Rex",
  especie: "Gos",
  ferSoroll() {
    console.log("Bup bup!");
  }
};

gos.ferSoroll();
```

📌 **Amb interface, fem que qualsevol objecte que sigui Animal tindrà un mètode ferSoroll().

***

### 3. Exercicis

✅ **Exercici 1:**  
Crea un `type` anomenat `Cotxe` amb propietats (`marca`, `model`, `any`) i declara un objecte.  

✅ **Exercici 2:**  
Crea una `interface` anomenada `Dispositiu` amb propietats (`nom`, `marca`, `preu`) i afegeix un mètode `descripcio()`. Implementa un objecte `portatil`.  

***

### 4. Arrays d'objectes   
Els arrays d'objectes són fonamentals per gestionar col·leccions de dades.  

#### Exemple amb `type`  

```typescript
type Alumne = {
  nom: string;
  edat: number;
};

const alumnes: Alumne[] = [
  { nom: "Joan", edat: 20 },
  { nom: "Anna", edat: 22 },
  { nom: "Pere", edat: 19 }
];

console.log(alumnes[1].nom); // Anna
```


✅ Exercici 3:
Crea un array d’objectes Cotxe[] i omple’l amb tres cotxes. Mostra’n el segon per consola.

El codi que hem generat a la classe es troba en aquests dos fitxers:

### 5. Creació de classes en TypeScript 
Les **classes** ens permeten generar múltiples objectes amb la mateixa estructura.  

#### Exemple de classe bàsica  

```typescript
class Llibre {
  constructor(public titol: string, public autor: string, public anyPublicacio: number) {}

  descripcio(): string {
    return `${this.titol}, escrit per ${this.autor} l'any ${this.anyPublicacio}.`;
  }
}

const llibre1 = new Llibre("1984", "George Orwell", 1949);
console.log(llibre1.descripcio());
```

📌 **Explicació:**  
- `constructor` inicialitza les propietats.  
- `descripcio()` retorna informació del llibre.  

### 6. Exercici Final: Botiga de Productes (30 min)  
**Objectiu:** Integrar objectes, arrays i mètodes en un cas real.  

#### 1️⃣ Definir una interfície `Producte`  

```typescript
interface Producte {
  nom: string;
  preu: number;
  stock: number;
}
```

### 2️⃣ Crear una classe `Botiga` amb un array de `Producte[]`  

```typescript
class Botiga {
  private productes: Producte[] = [];

  afegirProducte(producte: Producte) {
    this.productes.push(producte);
  }

  mostrarProductes() {
    this.productes.forEach((p) => console.log(`${p.nom}: ${p.preu}€ (Stock: ${p.stock})`));
  }
}
```

### 3️⃣ Afegir productes i mostrar-los  

```typescript
const botiga = new Botiga();
botiga.afegirProducte({ nom: "Mòbil", preu: 400, stock: 10 });
botiga.afegirProducte({ nom: "Portàtil", preu: 1200, stock: 5 });

botiga.mostrarProductes();
```

✅ **Exercici 5:**  
Afegeix més productes a la botiga i implementa un mètode que redueixi el `stock` quan es compri un producte.

Un cop vist això, amb un codi basic veure'm com [compilar i mostrar el resultat amb una pagina html dins una taula.](https://github.com/mikibardaji/M0373/tree/main/A2/A2/TSX_HTML#readme)



