interface Assignatura {
    nom: string;
    cicle: string;
    hores_duracio: number;
  }
  
  interface Estudiant {
    nom: string;
    edat: number;
    Tipus: string; // O si el camp es diu "Edat", pots ajustar-ho segons el JSON
    assignatures: Assignatura[];
  }


// El JSON proporcionat
const jsonEstudiants = `[
    {
      "nom": "Roser Salietti",
      "edat": 32,
      "Tipus": "Grau Superior",
      "assignatures": [
        {
          "nom": "M0485-Programació",
          "cicle": "DAM",
          "hores_duracio": 247
        },
        {
          "nom": "M0373-Llenguatge Marques",
          "cicle": "DAM",
          "hores_duracio": 99
        },
        {
          "nom": "M02-Base Dades",
          "cicle": "DAM",
          "hores_duracio": 198
        },
        {
          "nom": "M09-Aplicacions web",
          "cicle": "SMX",
          "hores_duracio": 247
        }
      ]
    },
    {
      "nom": "Toni Marti",
      "edat": 42,
      "Edat": "Grau Superior",
      "assignatures": [
        {
          "nom": "M0485-Programació",
          "cicle": "SMX",
          "hores_duracio": 247
        },
        {
          "nom": "M0373-Llenguatge Marques",
          "cicle": "SMX",
          "hores_duracio": 99
        },
        {
          "nom": "M02-Base Dades",
          "cicle": "SMX",
          "hores_duracio": 198
        },
        {
          "nom": "M09-Aplicacions web",
          "cicle": "SMX",
          "hores_duracio": 247
        }
      ]
    }
  ]`;
  
  // Convertir el JSON a un array d'objectes Estudiant
  const estudiants: Estudiant[] = JSON.parse(jsonEstudiants);
  
  // Mostrar el resultat
  console.log(estudiants);
  
  