import React, {useEffect, useState} from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./api";
import Navbar from './components/Navbar';
import Pokedex from "./components/Pokedex";
import Searchbar from './components/Searchbar';
import { FavoriteProvider } from "./contexts/favoritesContext";
import Rotas from "./components/Routes";


//key para pokemons favoritos no local storage
const favoritesKey = "f"

//funcao carregada ao iniciar a aplicacao
function App() {
  //funcao assincrona que vai buscar a api para buscar os pokemons
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [favorites, setFavorites] = useState([])
  
  //quantos pokemons sao mostrador por pagina
  const itensPerPage = 18

  //paginacao
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      setNotFound(false)
      const result = await getPokemons(itensPerPage, itensPerPage * page)
      const promises = result.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotalPages(Math.ceil(result.count / itensPerPage))
    } catch (error) {
      console.log("fetchPokemons error: ", error)
    }
  }

  //carregar quantidade de pokemons favoritos, armazenados no local storage
  const loadFavoriteFokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey))
    setFavorites(pokemons)
  }

  //chama a quantidade de favoritos
  useEffect(() => {
    loadFavoriteFokemons()
    }, [])

    //mudanca de pagina
  useEffect(() => {
    fetchPokemons()
    }, [page])

    //add pokemon aos favoritos caso ele nao esteja, remove caso ele ja esteja
    const updateFavoritePokemons = (name) => {
      const updatedFavorites = [...favorites]
      const favoriteIndex = favorites.indexOf(name)
      if(favoriteIndex >= 0) {
        updatedFavorites.splice(favoriteIndex, 1)
      }
      else {
        updatedFavorites.push(name)
      }
      window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
      setFavorites(updatedFavorites)
    }

    //busca pokemon digitado na searchbar
    const onSearchHandler = async (pokemon) => {
      if(!pokemon) {
        return fetchPokemons()
      }
      setLoading(true)
      setNotFound(false)
      const result = await searchPokemon(pokemon)
      if(!result) {
        setLoading(false)
        setNotFound(true)
      } else {
        setPokemons([result])
        setPage(0)
        setTotalPages(1)
      }
      setLoading(false)
    }

  return (
      <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
      >
      
      <div>
        <Rotas />
        <Navbar />
        <Searchbar onSearch={onSearchHandler}/>
        {notFound ? (
            <div className="not-found-text"> Oops, parece que esse pokémon não existe <s>ainda</s></div>
          ) : 
          (<Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />)}
      </div>
      </FavoriteProvider>
      
  );
  
}

export default App;