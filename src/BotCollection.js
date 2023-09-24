import React from 'react'
import RenderBot from './RenderBot'

function BotCollection({ bots, recruitBot }) {

  return (
    <div className='bot-collection'>
      <h1 style={{color: 'blueviolet'}}>BOT~COLLECTION</h1>
      {
        bots.map((bot, index) => {
          return <RenderBot key={index} bot={bot} handleClick={recruitBot}/>
        })
      }
    </div>
  )
}

export default BotCollection