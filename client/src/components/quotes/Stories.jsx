import React from 'react'
import "../../styles/stories.css"
const Stories = () => {
    let Story=[
        {
         paragraph:"You are not your illness; you have the unique opportunity to write your own narrative. You possess a name that resonates with history, a personality that distinguishes you. Holding onto your true self is a crucial aspect of overcoming adversity.",
         writer:"Chris Hemsworth"
        },
        {
         paragraph:"You are not defined by your struggles; you are the sum of your experiences, the resilience you've shown, and the lessons you've learned along the way. Your journey is a testament to your strength and your ability to rise above.",
         writer:"Steev Jobs"
        },
        {
            paragraph:"Your illness does not define you; it is merely a chapter in your story. You have a name that carries weight, a history that shapes you, and a personality that shines through adversity. Embracing your true self is an integral part of your journey towards healing and growth.",
            writer:"Jenifer watt"
           },
           {
            paragraph:"You are not just a diagnosis; you are a person with a unique story to share. Your name, your history, and your personality are what make you resilient. Remembering who you are is a powerful part of overcoming challenges and finding strength.",
            writer:"James M. Carl"
           }
    ]
  return (
    <div className='stories'>
       <h1>Mentify Stories</h1>
       <div className="card-wrapper">
        {
        Story.map((item,index)=>{
            return(
            <div className="cards" key={index}>
                <div className="coma">
                <i className="fa-solid fa-quote-left"></i>
                </div>
                <div className="story">
                 "{item.paragraph}"
                </div>
                <div className="writer">
                  --{item.writer}
                </div>
            </div>)
        })
        }
       </div>
    </div>
  )
}

export default Stories