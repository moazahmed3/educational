import React from 'react'
import './Hero.css' 
import Head from '../Head/Head'
import Header from '../Header/Header'
const Hero = ({subTitle,Title})=> {
  return (
    <div className='hero'>
        <Head/>
        <Header/>
        <div className="hero-text d-flex align-content-center justify-content-center flex-column ">
        <h5 className='text-light text-center fs-3' >Home/{subTitle}</h5>
        <h2 className='text-light text-center text-uppercase' >{Title}</h2>
        </div>
    </div>
  )
}

export default Hero