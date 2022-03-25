import React from 'react';
import './SingleIphone.css'
const SingleIphone = (props) => {
    const { price, phone_name, image } = props.iphone;
    return (
        <div className='iphone-card'>
            <img src={image} alt="" />
            <div className='iphone-info'>
                <p>{phone_name}</p>
                <p>Price: {price}</p>
            </div>
            <button className='cart-btn'>
                <p>add to cart</p>
            </button>
        </div>
    );
};

export default SingleIphone;