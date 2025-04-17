import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.jsx'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/player-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <App/>
      </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
