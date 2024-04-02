import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TitleColorProvider } from './context/TitleColorContext.jsx'
import { Pagina2Provider } from './context/Pagina2Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TitleColorProvider>
      <Pagina2Provider>
        <App />
      </Pagina2Provider>
    </TitleColorProvider>
  </React.StrictMode>,
)
