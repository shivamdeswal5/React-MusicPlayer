import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../../../page/home/home';
import './display.css'
import AlbumData from '../album/album-data';

export default function Display() {
  return (
    <div className='display-routes'>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/album/:id' element={<AlbumData/>}/>
        </Routes>
      
    </div>
  )
}
