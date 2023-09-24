import React from 'react'
import RenderBot from './RenderBot'

function MyBotArmy({ myBotArmy, disbandBot }) {
  return (
    <div className='my-bot-army'>
        <h1 style={{color: 'blueviolet'}}>MY~BOT~ARMY</h1>
        {
            myBotArmy.map((bot, index) => {
                return <RenderBot key={index} bot={bot}/>
            })
        }
    </div>
  )
}

export default MyBotArmy