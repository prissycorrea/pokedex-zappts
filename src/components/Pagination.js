import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

//paginacao na pagina pokedex, mostra a pagina atual e os botoes avancar e voltar
const Pagination = (props) => {
    const {page, onLeftClick, onRightClick} = props
    return (
        <div className="pagination-container">
            <button onClick={onLeftClick} className="back-button">
                <div className="back-icon">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
            </button>
            <div className="page-number">
            Página {page}
            </div>
            <button onClick={onRightClick} className="next-button">
                <div className="next-icon">
                    <FontAwesomeIcon icon={faAngleRight} />
                    
                </div>
            </button>
        </div>
    )
}

export default Pagination