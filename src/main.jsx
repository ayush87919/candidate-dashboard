import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar3 from './components/Navbar3.jsx'
import Navbar2 from './components/Navbar2.jsx'
import Heading from './components/heading.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar3 /> 
    <div className='grid grid-cols-4 relative '>
      <div className='col-span-4 md:col-span-1'>
        <Navbar2/>
      </div>
      <div className='md:col-span-3 col-span-4 '>
        <Heading />
        </div>
      
      </div>
    
  </React.StrictMode>,
)
