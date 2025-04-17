
import './app.css'
import Sidebar from './components/sidebar/sidebar'
import Player from './components/music-player/player/player'
import Display from './components/music-player/display/display'
import { useContext } from 'react'
import { PlayerContext } from './context/player-context'
function App() {

  const {audioRef,track} = useContext(PlayerContext)

  return (
    <div className='top-level-container'>
      <div className='music-player'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
