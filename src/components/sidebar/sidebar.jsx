import React from 'react'
import {assets} from '../../assets/assets'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='side-bar-container'>
        <div className='side-bar'>
            <div className='side-bar-home'>
                <img src={assets.home_icon}/>
                <p className='sidebar-home'>Home</p>
            </div>
            <div className='side-bar-search'>
                <img src={assets.search_icon}/>
                <p className='sidebar-home'>Search</p>
            </div>

        </div>

        <div className='sidebar-library'>
            <div className='library-content'>
                <div className='library'>
                    <img src={assets.stack_icon}/>
                    <p>
                        Your Library
                    </p>
                </div>

                <div className='library-icons'>
                    <img src={assets.arrow_icon} alt="" />
                    <img src={assets.plus_icon} alt="" />
                </div>

            </div>

            <div className='sidebar-createplaylist'>
                <h1>Create your first playlist</h1>
                <p> its easay we will help you</p>
                <button className='createplaylist-Btn'>Create Playlist</button>
            </div>

            <div className='sidebar-createplaylist'>
                <h1>Lets find some podcasts to follow</h1>
                <p> we'll keep you updated on new episodes</p>
                <button className='createplaylist-Btn'>Browse podcasts</button>
            </div>
        </div>
      
    </div>
  )
}
