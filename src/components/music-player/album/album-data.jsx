import React, { useContext } from 'react'
import Navbar from '../../navbar/navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../../../assets/assets';
import './album-data.css'
import { PlayerContext } from '../../../context/player-context';

export default function AlbumData() {
    const {id} = useParams();
    const albumData = albumsData[id];
    const playWithId = useContext(PlayerContext)
  return (
    <>
        <Navbar/>
        <div className='album-data'>
            <img src={albumData.image} alt="" />
            <div className='album-songs'>
                <p>Playlist</p>
                <h2>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className='paraSpotify'>
                    <img className='spotifyLogo' src={assets.spotify_logo} alt="" />
                    <b>Spotify</b>
                </p>
            </div>
        </div>

        <div className='albumSongs'>
            <p>
                <b>#</b> Title
            </p>
            <p>Album</p>
            <p>Date Added</p>
            <img src={assets.clock_icon} alt="" />
        </div>
        <hr />
        {
            songsData.map((item,index)=>(

                <div onClick={()=>playWithId(item.id)} key ={index} className='map-songs'>
                    <p>
                        <b>{index+1}</b>
                        <img src={item.image} alt="" />
                        {item.name}
                    </p>

                    <p>{albumData.name}</p>
                    <p>today</p>
                    <p>{item.duration}</p>
                    
                </div>
            ))
        }

    </>
  )
}
