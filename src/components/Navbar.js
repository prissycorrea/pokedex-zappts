import React, {useContext} from "react"
import FavoriteContext from "../contexts/favoritesContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"

//componente navbar contendo logotipo e links de navegacao
const Navbar = () => {
    const {favoritePokemons} = useContext(FavoriteContext)
    const logoImg = "https://raw.githubusercontent.com/prissycorrea/pokedex-zappts/e16c98634a8a856d3b4b6216024cedb5cf447801/project-images/logo.svg"
    return (
        <nav>
            <div>
                <img 
                alt="Logotipo Pokemon" 
                src={logoImg}
                className="navbar-img" />
            </div>
            <div className="navbar-links">
                <div className="navbar-link">
                    <NavLink exact to="/home" className="navbar-link">Home</NavLink>
                </div>
                <div className="navbar-link">
                    <NavLink exact to="/pokedex" className="navbar-link">Pokemons</NavLink>
                </div>
                <div className="navbar-link">
                    <NavLink to="#">Contato</NavLink>
                </div>
                <div className="navbar-link">
                    <NavLink to="#">{favoritePokemons.length} <FontAwesomeIcon icon={faHeart} /></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;