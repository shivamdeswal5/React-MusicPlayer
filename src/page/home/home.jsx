import React from 'react'
import Navbar from '../../components/navbar/navbar'
import { albumsData } from '../../assets/assets'
import { songsData } from '../../assets/assets'
import AlbumItem from '../../components/music-player/album/album-items'
import SongItem from '../../components/music-player/songs/songs-items'
import './home.css'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='music-list-container'>
      <h1>Featured Charts</h1>
      <div className='all-albums'>
      {
        albumsData.map((item,index)=>(
          <AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>
        ))
      }
      </div> 
    </div>
    <div className='music-list-container'>
      <h1>Today's biggest hits</h1>
      <div className='all-albums'>
      {
        songsData.map((item,index)=>(
          <SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>
        ))
      }
      </div> 
    </div>
    </>
  )
}
