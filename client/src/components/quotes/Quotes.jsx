import React from 'react'
import "../../styles/quote.css"
import Smile from "../../assets/Quotes/Smile.png"
import Meditation from "../../assets/Quotes/Maditiation.png"
import Moon from "../../assets/Quotes/Moon.png"
let Quote=[{
image:Smile,
heading:"Evereything Your Mind Needs",
paragraph:" Signifies a holistic approach to mental well-being, encompassing diverse stimuli, knowledge acquisition, emotional resilience, and creative fulfillment. It aims to nourish cognitive health through a balanced combination of learning, relaxation, and emotional stability."

},{
image:Meditation,
heading:"Enhancing Well-being through Mindfulness",
paragraph:"Encourages maximizing positive experiences and well-being. It promotes strategies like mindfulness, gratitude, and self-care to enhance daily happiness and resilience. It's about fostering a mindset and lifestyle that prioritizes joy, peace, and emotional balance."
},
{
image:Moon,
heading:"Get The Sleep Of Your Dreams",
paragraph:"Emphasizes achieving optimal rest and rejuvenation. It advocates for practices like establishing a bedtime routine, creating a comfortable sleep environment, and prioritizing relaxation to enhance sleep quality and overall well-being."
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