import React from 'react'
import Banner from '../components/Banner/Banner'
import Contactus from '../components/Contactus/Contactus'
import Products from '../components/Contactus/Products/Products'
import Features from '../components/Features/Features'
import Hero from '../components/Hero/Hero'

function Home() {
  return (
    <div>
        <Hero/>
        <Features/>
        <Products/>
        <Banner/>
        <Contactus/>
    </div>
  )
}

export default Home