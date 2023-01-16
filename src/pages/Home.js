import React from 'react'
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
        <Contactus/>
    </div>
  )
}

export default Home