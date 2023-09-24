import React from 'react'

function RenderBot({ bot, recruitBot }) {

  return (
    <div id={bot.id} className='card' onClick={recruitBot}>
      <h2 id={bot.id} style={{color: 'green'}}>{bot.name}</h2>
      <img id={bot.id} src={bot.avatar_url} alt=''
       style={{marginBottom: 15, marginTop: 0}}/>
      <h3 id={bot.id} style={{marginBottom: 10, color: 'green'}}>Bot Details:</h3>
      <p id={bot.id} style={{marginTop: 0}}>
        <b id={bot.id}>Health: </b> {bot.health}, <b id={bot.id}>Damage: </b> {bot.damage}<br/>
        <b id={bot.id}>Armor: </b> {bot.armor}, <b id={bot.id}>Class: </b> {bot.bot_class}<br/>
        <b id={bot.id}>created_at: </b> {bot.created_at}<br/>
        <b id={bot.id}>updated_at: </b> {bot.updated_at}<br/>
      </p>
    </div>
  )
}

export default RenderBot