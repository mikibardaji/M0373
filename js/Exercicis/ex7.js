            // Canviar les propietats de les imatges amb classe A, B i D
            // Primer, obtenir les imatges amb classe A
            const imatgesA = document.getElementsByClassName('A');
            // Recorrer les imatges amb la classe A i afegir un border
            for (const imatge of imatgesA) {
                imatge.style.border = "5px solid yellow"; // Aplicar un border groc a les imatges de la classe A
            }

            // Segon, obtenir les imatges amb classe B
            const imatgesB = document.getElementsByClassName('B');
            // Recorrer les imatges amb la classe B i afegir un border
            let primerB = true;
            for (const imatge of imatgesB) {
                imatge.style.border = "3px dotted red"; // Aplicar un border vermell puntejat
                if (primerB) {
                    imatge.style.borderRadius = "50%"; // Donar border-radius al primer element de la classe B
                    primerB = false;
                }
            }

            // Finalment, obtenir les imatges amb classe D mitjançant querySelectorAll
            const imatgesD = document.querySelectorAll('.D');
            // Utilitzant forEach per recórrer les imatges amb classe D
            imatgesD.forEach((imatge) => {
                imatge.style.border = "4px solid green";  // Afegir un border verd
                imatge.style.borderRadius = "10px"; // Afegir un border-radius de 10px
            });