import React from 'react'
import Hero from './../Components/Hero/Hero'
import './../Styles/Team.css'
import CardTeam from '../Components/CardTeam/CardTeam'
import Barend from '../Components/baren/Barend'
import FormContact from '../Components/form/FormContact'
import Footer from '../Components/Footer/Footer'
import dataTeam from './../Data/DataTeam'

function Team() {
  return (
    <div className="team">
      <Hero Title={"Team"}  subTitle={"Team"}/>
      <div className="container py-5">
        <div className="row">
          {
          dataTeam.map((data) => (
              <div className="col-lg-3 col-md-6 mt-5 " key={data.id}>
                <CardTeam data={data} />
              </div>
          ))}
          {
          dataTeam.map((data) => (
              <div className="col-lg-3 col-md-6 mt-4 " key={data.id}>
                <CardTeam data={data} />
              </div>
          ))}
        </div>
      </div>
      <Barend/>
      <FormContact/>
      <Footer/>
    </div>
  )
}

export default Team
