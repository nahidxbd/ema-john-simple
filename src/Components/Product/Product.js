import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import css from './Product.css'
const Product = (props) => {
    console.log(props.product)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className="div">
                <img src={img} alt="" />
            </div>
            <div className="div">
                <h3 className='product-name'>{name}</h3>
                <br />
                <p><small>By: {seller}</small></p>
                <p>$ {price}</p>

                <p><small>Only {stock} left in stock. Order soon. </small></p>
                <button className='main-button'> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart </button>
            </div>

        </div>
    );
};

export default Product;