import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './SingleIphone.css'
const SingleIphone = (props) => {
    const { handleAddToCart } = props;
    // console.log(handleAddToCart)
    const { price, phone_name, image } = props.iphone;
    return (
        <div className='iphone-card'>
            <img src={image} alt="" />
            <div className='iphone-info'>
                <p>{phone_name}</p>
                <p>Price: ${price}</p>
            </div>
            <button className='cart-btn' onClick={() => handleAddToCart(props.iphone)}>
                <p>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default SingleIphone;