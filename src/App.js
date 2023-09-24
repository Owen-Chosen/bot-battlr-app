import React from 'react';
import { useEffect, useState } from 'react';
import BotCollection from './BotCollection';
import MyBotArmy from './MyBotArmy';

function App() {

  const [bots, setBots] = useState([])
  const [myBotArmy, setMyBotArmy] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then(res => res.json())
    .then(data => {setBots(data)})
  },[])

  function recruitBot (event) {
    const id = event.target.id;
    fetch(`http://localhost:3000/bots/${id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: null
    })
    .then(res => res.json())
    .then(data => setMyBotArmy([...myBotArmy, data]))
  }

  function disbandBot (event) {
    console.log(myBotArmy)
    setMyBotArmy(myBotArmy.filter((bot) => {
      if(event.target.id != bot.id) return true
      else return false
    }))
  }


  return (
    <div className="App">
      <BotCollection bots={bots} recruitBot={recruitBot}/>
      <MyBotArmy myBotArmy={myBotArmy} disbandBot={disbandBot}/>
    </div>
  )
}

export default App;
