        // Funcions que simulen els exercicis 1, 2, 3
        function sumarValors(a, b) {
            const resultat = a + b;  // Suma els valors
            console.log("El resultat de la suma és: " + resultat);  // Mostra el resultat per consola
            return resultat;  // Retorna el resultat
        }

        
        function mitjaValors(a, b) {
            const mitja = (a + b) / 2;  // Calcula la mitja dels valors
            alert("La mitja dels dos valors és: " + mitja);  // Mostra la mitja en una finestra emergent
            return mitja;  // Retorna la mitja
        }

// Funció per comprovar si una persona és major o menor d'edat
        function majorEdat(edat) {
            let frase;
            if (edat >= 18) {
                frase = "Ets major d'edat";
            } else {
                frase = "Ets menor d'edat";
            }

            // Afegir la frase al final del document
            //const parraf = document.createElement("p");
            //parraf.textContent = frase;  // Assignem la frase a l'element
           // document.body.append(frase); 
		   return frase;
        }

       /* function mostrarResultats() {
            // 1. Utilitzar append() per afegir contingut al div2
            const div2 = document.getElementById("div2");
            div2.append(" - " + sumarValors(5, 3));  // Append el resultat de funcio1

            // 2. Utilitzar innerHTML per canviar el contingut del div1
            const div1 = document.getElementById("div1");
            div1.innerHTML = "Div1 actualitzat amb: " + mitjaValors(5, 3);  // Canvia el contingut

            // 3. Utilitzar append() per afegir contingut al div3
            const div3 = document.getElementById("div3");
            div3.append(" - " + majorEdat(19));  // Append el resultat de funcio3
        }*/
        // 1. Utilitzar append() per afegir contingut al div2
        const div2 = document.getElementById("div2");
		div2.style.backgroundColor = "yellow"; 
        div2.append(" - " + sumarValors(5, 3));  // Append el resultat de funcio1


        // 2. Utilitzar innerHTML per canviar el contingut del div1
        const div1 = document.getElementById("div1");
		div1.style.color = "blue";
        div1.innerHTML = "Div1 actualitzat amb: " + mitjaValors(5, 3);  // Canvia el contingut
		

            // 3. Utilitzar append() per afegir contingut al div3
		const div3 = document.getElementById("div3");
		div3.style.color = "green";  // Canviar el color del text a verd
        div3.style.backgroundColor = "lightgray";  // Canviar el color de fons a gris clar
        div3.style.fontSize = "20px";  
        div3.append(" - " + majorEdat(19));  // Append el resultat de funcio3
		