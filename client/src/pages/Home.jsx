import React from 'react'
import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import Card from '../components/Card/Card'

const Home = () => {
  return (
    <div>
        <Nav/>
        <div className="hero-section">
            <Hero/>
        </div>
<Card/>
    </div>
  )
}

export default Home