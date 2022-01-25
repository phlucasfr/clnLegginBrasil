import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1 className="text-danger fw-bold">Tem alguma pergunta?</h1>
                        <hr />

                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center float-end">
                        <img src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/272111591_117685033956860_1258784597870491117_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=i_i8riRHd5AAX-Ix-4V&_nc_ht=scontent-frt3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AT-Inlqc2-I6Vo8yKgfnICKPYFAn9ucFTCATGv8YwXT8rA&oe=61F43E05" alt=""
                            height="300px" width="300px" />
                    </div>
                </div>
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label for="exampleForm" className="form-label">Nome completo:</label>
                            <input type="text" className="form-control" id="exampleForm" placeholder="Digite seu nome completo aqui" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">E-mail:</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Sua pergunta:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-danger">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact