import React from 'react'
import "../../styles/stories.css"
const Stories = () => {
    let Story=[
        {
         paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam possimus quis quo sit quia quibusdam, error quae odit, harum maiores ducimus? Quo, temporibus eaque.",
         writer:"Steev Jobs"
        },
        {
         paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam possimus quis quo sit quia quibusdam, error quae odit, harum maiores ducimus? Quo, temporibus eaque.",
         writer:"Steev Jobs"
        },
        {
            paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam possimus quis quo sit quia quibusdam, error quae odit, harum maiores ducimus? Quo, temporibus eaque.",
            writer:"Steev Jobs"
           },
           {
            paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam possimus quis quo sit quia quibusdam, error quae odit, harum maiores ducimus? Quo, temporibus eaque.",
            writer:"Steev Jobs"
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
                 "
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