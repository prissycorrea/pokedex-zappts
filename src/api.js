//exporta metodos que sao usados pela aplicacao

export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        //chamada assincrona do que vamos receber
        const response = await fetch(url)
        return await response.json()
    } catch {
        console.log("error: ")
    }
}

export const getPokemons = async (limit = 255, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        //chamada assincrona do que vamos receber
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemonData = async (url) => {
    try {
        //chamada assincrona do que vamos receber
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}