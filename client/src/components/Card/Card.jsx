import React from 'react'
import "./Card.css"
const Card = () => {
    const cards=[
        {
            quote:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti accusantium aperiam possimus natus rerum dolor soluta, esse officia maiores ratione.",
            writer:"MArk Davidson"
        },
        {
          quote:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti accusantium aperiam possimus natus rerum dolor soluta, esse officia maiores ratione.",
          writer:"Richard Davidson"
      }
    ]
  return (
    <div className='card-wrapper'>
      {
cards.map((item,index)=>{
return(
    <div className='card' key={index}>
      <div className="content">
      {item.quote}
      </div>
      <div className="writer">
      {item.writer}
      </div>
    </div>
)
})}
    </div>
  )
}
export default Card