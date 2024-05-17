import React from 'react'
import Abouthome from '../Components/Abouthome/Abouthome'
import Barend from '../Components/baren/Barend'
import FormContact from '../Components/form/FormContact'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'
function About() {
  return (
    <div className='about'>
      <Hero Title={"about as"} subTitle={"about"}/>
      <Abouthome/>  
      <Barend/>
      <FormContact/>
      <Footer/>
    </div>
  )
}

export default About
