
function convertPokemonLi(pokemon) {
    return `
        <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="${pokemon.name}">
                </div>
            </li>
        `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    const newList = pokemons.map((pokemon) => convertPokemonLi(pokemon))
    const newHtml = newList.join('')
    pokemonList.innerHTML +=  newHtml
})

/**
 * simpler way to rewrite this code with map
 * 
 * pokeApi.getPokemons().then((pokemons = []) => {
 *      pokemonsList.innerHTML += pokemons.map(convertPokemonLi).join('')
 * })
 */