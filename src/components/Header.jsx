import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Singup from './buttons/Singup'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Quem somos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contato</NavLink>
                            </li>
                        </ul>
                    <NavLink className="navbar-brand mx-auto fw-bold" to="/"><img src='https://leggingbrasil.vteximg.com.br/arquivos/legging-brasil-logo.png?v=637587543577370000' /></NavLink>
                    <hr />
                    <Login/>
                    <Singup/>
                    <CartBtn/>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header