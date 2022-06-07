import React from "react"
import Navbar from "./components/Navbar"

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="home-flex">
                <div className="home-container">
                    <div>
                        <h1 className="home-title">Qual pokemon você <mark>escolheria</mark>?</h1>
                    </div>
                    <div className="home-text">
                        Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.
                    </div>
                    <div className="home-btn-container">
                        <a href="/pokedex"><button className="home-btn">
                            Veja os pokemons
                        </button></a>
                        <button className="home-btn-resp home-btn">
                            Contato
                        </button>
                    </div>
                </div>
                <div className="home-img">
                        <img src="https://raw.githubusercontent.com/prissycorrea/pokedex-zappts/aa4d320f532db59b2aa80db829e3dfb26c66897c/project-images/BannerComplete.svg" />
                </div>
            </div>
        </div>
    )

}

export default Home