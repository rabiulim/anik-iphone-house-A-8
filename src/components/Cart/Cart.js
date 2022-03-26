import React from 'react';

const Cart = ({ iphoneCart }) => {
    return (
        <div>
            <p>iphone order</p>
            <p> selected price:{iphoneCart.length}</p>
        </div>
    );
};

export default Cart;