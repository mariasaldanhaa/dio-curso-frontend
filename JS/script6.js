let pokemon = ["Pikachu", "Charmander", "Bulbasaur"];
let timePokemon = [
    ["Pikachu", "M", "level 1"],
    ["Chamander", "F", "level 4"]
]

console.log(pokemon);
console.log(pokemon[0]);
console.log(pokemon[1]);
console.log(pokemon[2]);

console.log(
    `O pokemon ${timePokemon[1][0]} é do sexo ${timePokemon[1][1]} e está no ${timePokemon[1][2]}`
);

// pop - remove o último elemento
pokemon.pop();
console.log(pokemon);

// shift -  remove o primeiro elemento
pokemon.shift();
console.log(pokemon);

// lenght - tamanho de uma matriz ou vetor
console.log(pokemon.length);