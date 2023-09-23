import React from 'react'

function RenderBot({ bot }) {
  return (
    <div className='card'>
      <h2 style={{color: 'green'}}>{bot.name}</h2>
      <img src={bot.avatar_url} alt=''
       style={{marginBottom: 15, marginTop: 0}}/>
      <h4 style={{marginBottom: 0, color: 'green'}}>Bot Details:</h4>
      <p style={{marginTop: 0}}><b>Health: </b> {bot.health},
       <b>Damage: </b> {bot.damage},<br/>
       <b>Armor: </b> {bot.armor}, <b>Class: </b> {bot.bot_class}<br/>
       <b>created_at: </b> {bot.created_at}<br/>
        <b>updated_at: </b> {bot.updated_at}<br/>
      </p>
    </div>
  )
}

export default RenderBot