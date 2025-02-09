# Sessions A4 Objectes i compilació TypeScript a JS
### Teoria WIKI

Ens basem amb la [wiki objectes](https://xtec.dev/typescript/object/)


# Objectiu  

**Entendre com es defineixen i utilitzen els objectes en TypeScript.**  

## 1. Introducció als objectes en TypeScript (15 min)  
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
## 2. Definició d'objectes en TypeScript: `type` vs `interface` (30 min)  

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
´´´

📌 ** Amb interface, fem que qualsevol objecte que sigui Animal tindrà un mètode ferSoroll().

***

# 3. Exercicis (10 min)  

✅ **Exercici 1:**  
Crea un `type` anomenat `Cotxe` amb propietats (`marca`, `model`, `any`) i declara un objecte.  

✅ **Exercici 2:**  
Crea una `interface` anomenada `Dispositiu` amb propietats (`nom`, `marca`, `preu`) i afegeix un mètode `descripcio()`. Implementa un objecte `portatil`.  

***



El codi que hem generat a la classe es troba en aquests dos fitxers:

- [Operadors i Varis.ts](https://github.com/mikibardaji/M0373/blob/main/A2/A2/S2-A2.ts)
