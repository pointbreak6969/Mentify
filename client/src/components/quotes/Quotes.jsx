import React from 'react'
import "../../styles/quote.css"
import Smile from "../../assets/Quotes/Smile.png"
import Meditation from "../../assets/Quotes/Maditiation.png"
import Moon from "../../assets/Quotes/Moon.png"
let Quote=[{
image:Smile,
heading:"Evereything Your Mind Needs",
paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, totam nisi cupiditate quisquam deleniti qui est ab et aspernatur id minus quaerat quae sequi hic optio exercitationem debitis. Animi atque iusto ipsum ducimus explicabo dolores ea accusantium expedita, tempore cum."

},{
image:Meditation,
heading:"Have More Good Days",
paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, totam nisi cupiditate quisquam deleniti qui est ab et aspernatur id minus quaerat quae sequi hic optio exercitationem debitis. Animi atque iusto ipsum ducimus explicabo dolores ea accusantium expedita, tempore cum."
},
{
image:Moon,
heading:"Get THe Sleep Of Your Dreams",
paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, totam nisi cupiditate quisquam deleniti qui est ab et aspernatur id minus quaerat quae sequi hic optio exercitationem debitis. Animi atque iusto ipsum ducimus explicabo dolores ea accusantium expedita, tempore cum."
}]
const Quotes = () => {
  return (
    <div className='card-wrapper'>
     {
        Quote.map((item,index)=>{
        return(
            <div className="card" key={index}>
                <div className="image" >
                  <img src={item.image} alt=""/>
                </div>
                <div className="content">
                    <div className="heading">{item.heading}</div>
                    <div className="paragraph">{item.paragraph}</div>
                </div>

            </div>
        )
        })
     }

    </div>
  )
}

export default Quotes