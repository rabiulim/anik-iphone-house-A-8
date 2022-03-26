import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleIphone from '../SingleIphone/SingleIphone';
import './IphoneSection.css'
const IphoneSection = () => {
    const [iphones, setIphones] = useState([])
    const [iphoneCart, setIphoneCart] = useState([])
    const [y, setY] = useState({})
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

    const reset = () => {
        setIphoneCart([])
    }
    const chooseOne = () => {
        if (!iphoneCart.length) {
            return
        }
        const x = Math.floor(Math.random() * iphoneCart.length)
        setY(iphoneCart[x])
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
                        <button onClick={chooseOne}>
                            <p>choose one</p>
                        </button>
                        <button onClick={reset}>
                            <p>reset</p>
                        </button>
                        <p>{y.phone_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IphoneSection;