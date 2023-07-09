import './PricingCardsStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'

const PricingCards = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- CLASS X -</h3>
                    <span className='bar'></span>
                    {/* <p className='btc'>$ 100</p> */}
                    <p>- HOLY CROSS SCHOOL - </p>
                    <p>- ICSE BOARD -</p>
                    <p>- 81% MARKS-</p>
                    <p>- PASSED OUT IN 2013.-</p>
                    <Link to='/contact' className='btn'>NAUTANWA</Link>
                </div>
                <div className='card'>
                    <h3>- CLASS XII -</h3>
                     <span className='bar'></span> 
                    {/* <p className='btc'>$ 200</p> */}
                    <p>- OXFORD MODEL SCHOOL - </p>
                    <p>- CBSE BOARD -</p>
                    <p>- 82% MARKS -</p>
                    <p>- PASSED OUT IN 2015 -</p>
                    <Link to='/contact' className='btn'>KANPUR</Link>
                </div>
                <div className='card'>
                    <h3>- GRADUATION -</h3>
                    <span className='bar'></span>
                    {/* <p className='btc'>$ 500</p> */}
                    <p>- GLAGOTIAS COLLEGE - </p>
                    <p>- AKTU -</p>
                    <p>- 67% MARKS -</p>
                    <p>- PASSED OUT IN 2020 -</p>
                    <Link to='/contact' className='btn'>GREATER NOIDA</Link>
                </div>
            </div>
        </div>
    )
}

export default PricingCards