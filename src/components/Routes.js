import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home'
import App from '../App'

//rotas para navegacao entre os links home e pokedex
const Rotas = () => {
    return (
    <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/pokedex" element={<App />} />
    </Routes>)
}

export default Rotas