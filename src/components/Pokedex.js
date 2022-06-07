import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";


//estrutura da pokedex e os pokemons nela contidos
const Pokedex = (props) => {
    const {pokemons, loading, setPage, page, totalPages} = props
    //botao de voltar pagina, so vai voltar se a pagina atual for maior que zero
    const onLeftClickHandler = () => {
        if(page > 0) {
            setPage(page-1)
        }
    }
    //botao avancar pagina, so vai avancar se a pagina +1 for diferente do total de paginas
    const onRightClickHandler = () => {
        if(page+1 !== totalPages) {
            setPage(page+1)
        }
    }
    return (
        <div className="pokedex-container">
            {loading ? (<div class="loading-container"><div className="loading-page"></div></div>
            ) : (
            <div className="pokedex-grid-container">
                <div className="pokedex-grid"> 
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            //vai retornar os dados dos pokemons
                            <Pokemon key={index} pokemon={pokemon} />
                        )
                    })}
                </div>
            </div>)}
            <div className="pokedex-pagination">
                <Pagination 
                    page={page+1}
                    totaPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                />
            </div>
        </div>
    )
}

export default Pokedex;