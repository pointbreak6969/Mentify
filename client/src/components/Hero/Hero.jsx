import React from 'react'
import "./Hero.css"
import Card from '../Card/Card'
const Hero = () => {
console.log(Card)
  return (
    <div className="hero">
    <div className='main-content'>
<div className="heading">
<h1 className='text-6xl'>Hero Title </h1>
<h4 className='text-3xl'>Sub title</h4>
</div>
<Card/>
</div>
</div>
  )
}

export default Hero