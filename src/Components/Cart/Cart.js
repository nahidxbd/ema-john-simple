import React from 'react';
import css from './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)

let total = 0;
for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
    
}

let shipping =0;
if (total > 200){
    shipping = 0;
}
else if (total > 100){
    shipping = 4.99;
}
else if (total > 0){
    shipping = 8.99;
}

const tax = total / 10 ;
const grandTotal = (total + shipping +Number(tax)).toFixed(2);

const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number (precision);
}
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: ${formatNumber(total)} </p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax+Vat: ${formatNumber(tax)}</small></p>
            <p>Total Price: $ {grandTotal}</p>
        </div>
    );
};

export default Cart;