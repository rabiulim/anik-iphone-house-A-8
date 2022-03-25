import React, { useEffect, useState } from 'react';
import SingleIphone from '../SingleIphone/SingleIphone';
import './IphoneSection.css'
const IphoneSection = () => {
    const [iphones, setIphones] = useState([])
    console.log(iphones)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setIphones(data))
    }, [])
    return (
        <div className='all-iphone-container'>
            <div className='single-iphone-container'>
                {
                    iphones.map(iphone => <SingleIphone key={iphone.id} iphone={iphone}></SingleIphone>)
                }
            </div>
            <div>
                <p>iphone order</p>
            </div>
        </div>
    );
};

export default IphoneSection;