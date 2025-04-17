import React from 'react'
import { assets } from '../../assets/assets'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div className='navbar-icons'>
          <img onClick={()=>navigate(-1)} src={assets.arrow_left} alt="" />
          <img onClick={()=>navigate(+1)} src={assets.arrow_right} alt="" />
        </div>
        <div className='explore-premium'>
          <p className='premium'>Explore Premium</p>
          <p>Install App</p>
        </div>
      </div>

      <div className='listen-types'>
        <p className='listen-all'>All</p>
        <p className='listen-music'>Music</p>
        <p className='listen-podcast'>podcasts</p>
      </div>

    </>
  )
}
