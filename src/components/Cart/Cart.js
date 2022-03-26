import React from 'react';
import './Cart.css'
const Cart = ({ SingleIphone }) => {
    // console.log(SingleIphone)
    return (
        <div className='iphone-cart'>
            <p>{SingleIphone.phone_name}</p>
        </div>
    );
};

export default Cart;