import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import to add page routing
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap App on BrowserRouter for page routing to work */}

    {/* Regarding ReactContext, BrowserRouter is technically the same */}
    {/* It allows BrowserRouter to make use of App */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
