import React from 'react'
import '../../styles/heros.css'
import smartphone1 from"../../assets/smart-phone1.png"
import smartphone2 from"../../assets/smart-phone2.png"
import smartphone3 from"../../assets/smart-phone3.png"
import smartphone4 from"../../assets/smart-phone4.png"
import left from '../../assets/left.png'
import right from '../../assets/right.png'
import Middle from '../../assets/Middle.png'

const Heros = () => {
  return (
    <>

    <div className='heros'>
        
        <h1 className='heading'>Find Your Light, <br /> One At A Time</h1>
        {/* <h1>You are stronger than you think.
          You have gotten through every bad day in your life, and you are undefeated</h1> */}
        
        <div className="bird-left">
            <img src={left} alt="" />
          </div>
          <div className="bird-right">
            <img src={right} alt="" />
          </div>
          <div className="middle">
            <img src={Middle} alt="" />
          </div>
        <div className="image1">
          <img src={smartphone1} alt="" />
        </div>
        <div className='image2'>
          <img src={smartphone2} alt="" />
        </div>
        <div>
          <div className="image3">
            <img src={smartphone3} alt="" />
          </div>
          <div className="image4">
            <img src={smartphone4} alt="" />
          </div>
        </div>
        
    </div>

    </>
  )

}

export default Heros