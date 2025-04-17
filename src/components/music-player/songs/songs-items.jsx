import React, { useContext } from 'react'
import './song-item.css'
import { PlayerContext } from '../../../context/player-context'

export default function SongItem({name,image,desc,id}) {

  const {playWithId} = useContext(PlayerContext);

  return (
    <div className='song-items' onClick={()=>playWithId(id)}>
      <img src={image} alt="" />
      <p className='song-name'>{name}</p>
      <p>{desc}</p>
    </div>
  )
}
