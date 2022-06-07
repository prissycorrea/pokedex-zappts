import React from "react";
import {useState} from "react"
import {searchPokemon} from "../api";

//testando o que foi digitado na barra de pesquisa
const Searchbar = (props) => {
    // utilizando o useState para renderizar o texto da barra de pesquisa de forma dinamica
    const [search, setSearch] = useState("dito")
    const {onSearch} = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    // metodo para buscar o que foi pesquisado
    const onButtonClickHandler = () => {
        onSearch(search)
    }

    //titulo, barra de pesquisa e botao buscar
    return (
        //titulo
        <div className="searchbar-cointainer">
            <div className="searchbar-text">
                Mais de 250 Pokémons para você escolher o seu favorito
            </div>
            <div className="searchbar-search-container">
                <div className="searchbar">
                    <input placeholder="Pesquisar Pokémon" onChange={onChangeHandler} onKeyUp={onButtonClickHandler}/>
                </div>
                <div className="dropdown-type-container">
                <div className="dropdown-type">
                    <select>
                        <option disabled selected>Tipo</option>
                        <option value="água">Água</option>
                        <option value="dragão">Dragão</option>
                        <option value="elétrico">Elétrico</option>
                        <option value="fada">Fada</option>
                        <option value="fantasma">Fantasma</option>
                        <option value="ferro">Ferro</option>
                        <option value="fogo">Fogo</option>
                        <option value="gelo">Gelo</option>
                        <option value="inseto">Inseto</option>
                        <option value="lutador">Lutador</option>
                        <option value="normal">Normal</option>
                        <option value="pedra">Pedra</option>
                        <option value="planta">Planta</option>
                        <option value="psiquico">Psíquico</option>
                        <option value="sombrio">Sombrio</option>
                        <option value="terra">Terra</option>
                        <option value="veneno">Veneno</option>
                        <option value="voador">Voador</option>
                    </select>
                </div>
                <div className="dropdown-attack">
                <select>
                    <option disabled selected>Ataque</option>
                    <option>0 - 100</option>
                    <option>100 - 200</option>
                    <option>300+</option>
                </select>
                </div>
                <div className="dropdown-defense">
                <select>
                    <option disabled selected>Defesa</option>
                    <option>0 - 100</option>
                    <option>100 - 200</option>
                    <option>300+</option>
                </select>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Searchbar;