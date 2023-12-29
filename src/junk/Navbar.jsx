import { useState } from 'react';
import Group from '../assets/Group.png';
import upside_down from '../assets/upside_down.svg';
export default function Navbar() {
  const [show, setShow] = useState(false);

  function dropdown(){
    setShow(!show);
  }

  return (
    <span>
    <nav className={`bg-blue-900 absolute md:static md:translate-y-0 h-full ${show? `translate-y-0` :`translate-y-[-100vw]`}`}>
       
      <ul className="md:flex  text-white justify-center space-x-20 h-20 px-2 md:pb-5 pt-7 ">
        
        <li className='pl-4'><img src={Group} className="w-8 h-6" /></li>
        <li className="cursor-pointer">Dashboard</li>
        <li className="cursor-pointer"> Job setup</li>
        <li className="cursor-pointer"> Applications</li>
        <li className="cursor-pointer">Interviews</li>
        <li className="cursor-pointer">Candidates</li>
        <li className="cursor-pointer">Clients</li>
        <li className="cursor-pointer">Process Management</li>
        <li className="cursor-pointer">Inbox</li>
        <li><img src="https://purepng.com/public/uploads/medium/search-icon-sl7.png" className="w-5 h-5" /></li>
        </ul>   
      
    </nav>
    <button className={`top-[1vw] right-[1vw] absolute md:hidden ${show?`top-0`:`bottom-[100vw]`}`} onClick={dropdown}>
    <img src={upside_down} alt="Arrow Icon" />arrow
    </button>
    
    </span>


  )
}
/* Vector */


