import React from "react"
import { useParams } from "react-router"
import { useState } from "react"
import DATA from "../Data"
import { useDispatch } from "react-redux"
import {addItem, delItem} from '../redux/actions/index'

const ProductDetail = () => {
    const  [cartBtn, setCartBtn] = useState("Adicionar ao carrinho")
    const proId = useParams();
    const proDetail = DATA.filter(x=>x.id == proId.id)
    const product = proDetail[0];
    console.log(product);

    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Adicionar ao carrinho") {
            dispatch(addItem(product))
            setCartBtn("Remover do carrinho")
        } else {
            dispatch(delItem(product))
            setCartBtn("Adicionar ao carrinho")
        }
    }

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt={product.title} height="800px"/>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold text-danger">{product.title}</h1>
                        <hr />
                        <h2 className="my-4">R${product.price}</h2>
                        <p className="lead">{product.desc}</p>
                        <button onClick={()=>handleCart(product)} className="btn btn-outline-danger my-5">{cartBtn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail