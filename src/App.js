import React from 'react';
import { useEffect, useState } from 'react';
import BotCollection from './BotCollection';

function App() {

  const [bots, setBots] = useState([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then(res => res.json())
    .then(data => {
      setBots(data)
      //setReload(()=>!reload)
    })
  },[])

  console.log(bots)

  return (
    <div className="App">
      <BotCollection bots={bots} />
    </div>
  )
}

export default App;
