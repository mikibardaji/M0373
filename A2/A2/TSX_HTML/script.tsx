interface Pokemon {
    nombre: string;
    tipo: string;
}

const pokemons: Pokemon[] = [
    { nombre: "Pikachu", tipo: "Elèctric" },
    { nombre: "Charmander", tipo: "Foc" },
    { nombre: "Squirtle", tipo: "Aigua" },
    { nombre: "Bulbasaur", tipo: "Planta/Veneno" },
    { nombre: "Eevee", tipo: "Normal" },
    { nombre: "Gengar", tipo: "Fantasma/Veneno" },
    { nombre: "Snorlax", tipo: "Normal" },
    { nombre: "Jigglypuff", tipo: "Fada/Normal" },
    { nombre: "Lucario", tipo: "Lluita/Acero" },
    { nombre: "Machop", tipo: "Lluita" },
    { nombre: "Pidgeot", tipo: "Normal/Volador" },
    { nombre: "Onix", tipo: "Rock/Terrestre" },
    { nombre: "Alakazam", tipo: "Psíquic" },
    { nombre: "Gyarados", tipo: "Aigua/Volador" },
    { nombre: "Arcanine", tipo: "Foc" },
    { nombre: "Mewtwo", tipo: "Psíquic" },
    { nombre: "Charizard", tipo: "Foc/Volador" },
    { nombre: "Lapras", tipo: "Aigua/Glaç" },
    { nombre: "Vaporeon", tipo: "Aigua" },
    { nombre: "Flareon", tipo: "Foc" },
    { nombre: "Espeon", tipo: "Psíquic" },
    { nombre: "Umbreon", tipo: "Fosc" },
    { nombre: "Leafeon", tipo: "Planta" },
    { nombre: "Glaceon", tipo: "Glaç" },
    { nombre: "Sylveon", tipo: "Fada" }
];


const tablaBody = document.getElementById("tabla-body");

if (tablaBody) {
    pokemons.forEach(pokemon => {
        const fila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = pokemon.nombre;
        fila.appendChild(celdaNombre);

        const celdaTipo = document.createElement("td");
        celdaTipo.textContent = pokemon.tipo;
        fila.appendChild(celdaTipo);

        tablaBody.appendChild(fila);
    });
}
