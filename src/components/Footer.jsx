import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 justify-content-center">
                        <h5>Institucional</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><NavLink to="/" className="nav-link p-0 text-muted">Princípal</NavLink></li>
                            <li className="nav-item mb-2"><NavLink to="/about" className="nav-link p-0 text-muted">Quem Somos</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-6 justify-content-center">
                        <h5>Atendimento</h5>
                        <ul className="nav flex-column">
                            <li>
                                <img src="https://leggingbrasil.vteximg.com.br/arquivos/footer-whatsapp.png?v=637595469791900000" alt="ícone Whatsapp" />
                                <span> (47) 3304-1991</span>
                            </li>
                            <li>
                                <img src="https://leggingbrasil.vteximg.com.br/arquivos/footer-phone.png?v=637595469789400000" alt="ícone Telefone"/>
                                <span> (47) 3304-1991</span>
                            </li>
                            <li className="nav-item mb-2"><NavLink to="/contact" className="nav-link p-0 text-muted">Tem alguma dúvida?</NavLink></li>
                        </ul>
                    </div>
                    <br />

                    <div className="col-6 float-end">
                        <form>
                            <h5>Inscreva-se para receber promoções</h5>
                            <div className="d-flex w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">E-mail</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="E-mail" />
                                <button className="btn btn-danger" type="button">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-between py-2 my-2 border-top">
                    <p>© 2022 Phelipe, Inc. Projeto para estudo, sem fins lucrativos.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer