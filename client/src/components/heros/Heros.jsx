import React from 'react'
import '../../styles/heros.css'
import smartphone1 from"../../assets/smart-phone1.png"
import smartphone2 from"../../assets/smart-phone2.png"
import smartphone3 from"../../assets/smart-phone3.png"
import smartphone4 from"../../assets/smart-phone4.png"
const Heros = () => {
  return (
    <div className='heros'>
        <h1 className='heading'>Find Your Light, <br /> One At A Time</h1>
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
  )
}

export default Heros