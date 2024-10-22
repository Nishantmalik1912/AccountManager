import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import All from './Components/All/All.jsx'
import Daily from './Components/daily/Daily.jsx'
import Monthly from './Components/Monthly/Monthly.jsx'
import Weekly from './Components/weekly/Weekly.jsx'
import Yearly from './Components/yearly/Yearly.jsx'

const roouter=createBrowserRouter([
  {path : '/' ,
  element : <App/> ,
  children : [
   {
    path : '' ,
    element : <All/>
   } ,
   {
    path : '/daily' ,
    element : <Daily/>
   },
   {
    path : '/weekly' ,
    element : <Weekly/>
   },
   {
    path : '/monthly' ,
    element : <Monthly/>
   }
   ,
   {
    path : '/yearly' ,
    element : <Yearly/>
   }
  ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={roouter}/>
   
  </StrictMode>,
)
