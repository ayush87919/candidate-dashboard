import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Navbar2 from './components/Navbar2.jsx'
import Heading from './components/heading.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar /> 
    <div className='grid grid-cols-4'>
      <div className='col-span-1'>
        <Navbar2/>
      </div>
      <div className='col-span-3'>
        <Heading />
        </div>
      
      </div>
    
      

    
    
    
    
   
  </React.StrictMode>,
)
