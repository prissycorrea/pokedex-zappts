import React, {useContext,} from "react"
import FavoriteContext from "../contexts/favoritesContext"


//estrutura os cards de cada pokemon
const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props

    //adicionar pokemon aos favoritos
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
        //console.log("fav")
    }

    //mudanca de icone, diferenciando pokemon ja adicionado aos favoritos e pokemon que pode ser adicionado aos favoritos
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️": "🤍"

    //mudanca de cor de fundo do card de acordo com o tipo do pokemon
    //const types = pokemon.types.map(typeInfo => typeInfo.type.name)
    //const card = document.querySelector('.pokemon-card')
    //const pokeType = types[0]
    
    //const typesOf = () => {
        //if(pokeType === 'grass') {
            //return (
            //card.classList.add('grass')
            //)
        //} else if(pokeType === 'fire') {
            //return (
            //card.classList.add('fire')
            //)
        //}
    //}

    return (
        //estrutura do card pokemon
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <div className="pokemon-id">#{pokemon.id}</div>
                <img alt={pokemon.name} src={pokemon.sprites.front_default}  className="pokemon-image" />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3 className="pokemon-name">{pokemon.name}</h3>
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>
                        {heart}
                    </button>
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className="pokemon-type-text">{type.type.name}
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    </div>)

}

export default Pokemon