import React, { useEffect, useState } from 'react'
import './ap.css'
export default function Api() {
  const [i, seti] = useState([])
  const [memeimg, setmeme] = useState("");
  const [name, setname] = useState("");
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then(response => {
      return (response.json())
    }).then(data => {
      seti(data.data.memes)
    })
  }, [])
  function show() {
    let id1 = Math.floor(Math.random() * 10)
    let id2 = Math.floor(Math.random() * 10)
    let id = id1 + '' + id2
    setmeme(i[id].url)
    setname(i[id].name)
  }
  return (
    <div>
      <button onClick={show}>Show meme</button>
      <img alt='meme' src={memeimg} />
      <p>{name}</p>

    </div>
  )
}
