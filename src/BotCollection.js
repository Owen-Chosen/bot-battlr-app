import React from 'react'
import RenderBot from './RenderBot'

function BotCollection({ bots }) {

  return (
    <div className='bot-collection'>
      <h1 style={{textAlign: 'center'}}>BOT~COLLECTION</h1>
      {
        bots.map((bot, index) => {
          return <RenderBot key={index} bot={bot}/>
        })
      }
    </div>
  )
}

export default BotCollection