import React from 'react'
import './album-item.css'
import { useNavigate } from 'react-router-dom'

export default function AlbumItems({image,name,desc,id}) {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='album-items'>
      <img src={image} alt="" />
      <p className='album-name'>{name}</p>
      <p>{desc}</p>
    </div>
  )
}
