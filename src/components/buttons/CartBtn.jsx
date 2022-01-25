import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-danger ms-2">
                <span className='fa fa-shopping-cart me-1'></span> Carrinho({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn