# Sessions A2  Diferents característiques TypeScript

### Teoria WIKI

Ens basem amb la [wiki oficial de l'assignatura](https://xtec.dev/typescript/sequence/)

## Els caracters backslash amb typeScript

Els backticks són cometes de “funcionalitat estesa”. Ens permet incrustar variables i expressions en una string tancant-les a ${...}, per exemple:

```sh
let name = "John";

// incrustar una variable
console.log `Hola, ${name}!` ) 

// incrustar una expresión
console.log `el resultado es ${1 + 2}` )
```

Recordar dos operadors diferents a Java

*Exponent i divisio amb residu

![imatge](https://github.com/mikibardaji/M0373/blob/main/A2/A2/imatges/exponente.PNG)

###Operador ternari

Serveix per realitzar un if amb una sola linea

```sh
let result = condition ? value1 : value2;
```

Un exemple podria ser 

```sh
let age = Number(prompt('¿Qué edad tienes?', "0"))

let accessAllowed = (age > 18) ? "Por supuesto!" : "Ni en sueños!"
alert(accessAllowed)
```

Però es pot concatenar amb varies condicions...

### Múltiples ?

```sh
let age = Number(prompt('¿edad?', "18"));

let message =
    (age < 3) ? '¡Hola, bebé!' :
        (age < 18) ? '¡Hola!' :
            (age < 100) ? '¡Felicidades!' :
                '¡Qué edad tan inusual!';

alert(message);
```

Primers amb if's i else if

- Escriu un script que et pregunta l'edat, i et diu que pots votar si tens més de 17 anys:

2.- Modifica l'script perque a més de dir-te que encara no tens edat per votar, et digui quants anys et falten per poder votar.

3.- Que passa si l'usuari et diu que té -555 anys?

4.- Usando el constructor if..else, escribe un código que obtenga a través de un prompt un número y entonces muestre en un alert:

    1, si el valor es mayor que cero,
    -1, si es menor que cero,
    0, si es igual a cero.
 




