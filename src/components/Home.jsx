import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'

const Home = () => {

    const cardItem = (item) => {
        return (
            <div className="card my-5 py-4 border-danger mb-3" hey={item.id} style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="lead">R${item.price}</p>
                    <NavLink to={`/produtos/${item.id}`} className="btn btn-outline-danger ali">Eu quero</NavLink>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <span className='data-bs-interval="2000"'></span><img className="img-fluid" src="https://leggingbrasil.vteximg.com.br/arquivos/ids/158515/FullBanner-Inicial.jpg?v=637783699153700000" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <span className='data-bs-interval="2000"'></span><img className="img-fluid" src="https://leggingbrasil.vteximg.com.br/arquivos/ids/158953/FullBanner-Inicial-colors.jpg?v=637783944717400000" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <span className='data-bs-interval="2000"'></span><img className="img-fluid" src="https://leggingbrasil.vteximg.com.br/arquivos/ids/158510/BANNER-APP.jpg?v=637783913013170000" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center text-danger">
                        <h1>Promoções</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row md-2 justify-content-around">
                    {DATA.map(cardItem)}
                </div>
            </div>
        </div>
        
    )
}

export default Home


