import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Componente base
import Home from './routes/Home.jsx';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Contact from './routes/Contact.jsx';
import { CounterContextProvider } from './context/CounterContext.jsx';
import { TitleColorContextProvider } from './context/TitleColorContext.jsx';
import { ParaColorProvider } from './context/ParaColorContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //componente base
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      }, 
    ]
  },
 /*{
    path: 'contact',
    element: <Contact />
  }*/
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <ParaColorProvider>
          <RouterProvider router={router} />
        </ParaColorProvider>
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>,
)
