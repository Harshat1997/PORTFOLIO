import './HeroImgStyles.css'

import React from 'react'
import IntroImg from '../assets/background-img.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='into-img' src={IntroImg} alt='IntroImg' />
            </div>
             <div className='content'>
                <p>HI, I AM HARSHAT MADDESHIYA.</p>
                <h1>Front-End Developer</h1>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
           </div>
        </div>
    )
}

export default HeroImg
