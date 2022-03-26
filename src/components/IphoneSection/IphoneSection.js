import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleIphone from '../SingleIphone/SingleIphone';
import './IphoneSection.css'
const IphoneSection = () => {
    const [iphones, setIphones] = useState([])
    const [iphoneCart, setIphoneCart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setIphones(data))
    }, [])

    const handleAddToCart = (iphone) => {
        // console.log(iphone)
        const newCart = [...iphoneCart, iphone]
        setIphoneCart(newCart)
    }

    return (
        <div className='all-iphone-container'>
            <div className='single-iphone-container'>
                {
                    iphones.map(iphone => <SingleIphone key={iphone.id} iphone={iphone} handleAddToCart={handleAddToCart} ></SingleIphone>)
                }

            </div>
            <div className='all-cart-container'>
                <div className='cart-container'>
                    <h2>Your Order Summary</h2>
                    {
                        iphoneCart.map(SinglePhone => <Cart SingleIphone={SinglePhone} key={SinglePhone.id}></Cart>)

                    }
                    <div className='order-btn'>
                        <button>
                            <p>choose one</p>
                        </button>
                        <button>
                            <p>reset</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IphoneSection;