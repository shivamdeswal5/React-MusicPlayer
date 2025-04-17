import React, { useContext } from 'react'
import './player.css'
import { assets, songsData } from '../../../assets/assets'
import { PlayerContext } from '../../../context/player-context'

export default function player() {

    const {seekBar,seekBg,play,pause,playStatus,track,time,next,prev,seekSong} = useContext(PlayerContext);
  return (
    <div className='player-container'>
        <div className='playercontainer'>
            <img src={track.image}/>
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}</p>
            </div>
        </div>  
        <div className='player-music-bar'>
            <div className='music-bar'>
                <img src={assets.shuffle_icon} alt="" />
                <img onClick={prev} src={assets.prev_icon} alt="" />
                {
                    playStatus ? <img onClick={pause} src={assets.pause_icon} alt="" /> 
                    :
                    <img onClick={play} src={assets.play_icon} alt="" />
                }
                <img onClick={next} src={assets.next_icon} alt="" />
                <img  src={assets.loop_icon} alt="" />
            </div>
            
            <div className='player-progressBar'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref ={seekBg} onClick={seekSong} className='progressBar'>
                    <hr ref={seekBar}/>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div> 

    </div>
  )
}
