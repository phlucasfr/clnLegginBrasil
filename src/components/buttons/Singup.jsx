import React from 'react'

const Singup = () => {
    return (
        <div>
            {/*<!-- Button trigger modal -->*/}
            <button type="button" className="btn btn-outline-danger ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className='fa fa-user-plus me-1'></span> Cadastre-se
            </button>

            {/*<!-- Modal -->*/}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cadastro</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-danger w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Cadastre-se com Google
                            </button>
                            <button className="btn btn-primary w-100 mb-2">
                                <span className="fa fa-facebook me-2"></span> Cadastre-se com Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Usuário:</label>
                                    <input type="text" className="form-control" id="exampleInput"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">E-mail:</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">Nós nunca compartilharemos seu e-mail com alguém..</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Senha:</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Não sou um robô</label>
                                </div>
                                <button type="submit" className="btn btn-outline-danger w-100 mt-5">Cadastre-se</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singup