import { useState } from 'react';
import Avatar from '../assets/Avatar.png';
import Vector from '../assets/Vector.svg';
import support from '../assets/support.svg';
import settings from '../assets/settings.svg';

export default function Navbar2() {

  const [show, setShow] = useState(false);

  function toggleSidebar(){
    setShow(!show);
  }

  return (
    <section className={`absolute md:static md:translate-x-0 w-full ${show ? 'translate-x-0' : 'translate-x-[-100vw]'}`}>

      <div className="bg-blue-900 w-full">
        <ul className="ml-7 space-y-7 mr-7">
          <div className='flex pt-9 gap-3'>
            <button className=" py-2 rounded-lg flex border-2 border-white text-white w-full h-auto pl-2 "> + New Scoring
            </button>
            <button className='pl-2 border-2 rounded-lg pr-2'><img src={Vector} className='w-5 h-5' />
            </button>
          </div>
          <div className="pt-14 flex-col  space-y-7 text-white">
            <li className="text-sm font-medium text-slate-400">Current roles to fill</li>
            <li className="font-normal text-base">Junior Software Engineer</li>
            <li className="text-base">PR Assistant</li>
            <li className="font-normal text-base">Finance Director</li>
            <li className="text-sm font-medium text-slate-400">Active Campaigns</li>
            <li className="font-normal text-base">Junior Software Engineer</li>
            <li className="text-base">PR Assistant</li>
            <li className="text-sm font-medium text-slate-400">Client Meetings</li>
            <li className="font-normal text-base">Junior Software Engineer</li>
            <li className="text-base">PR Assistant</li>
            <li className="flex pt-20"><img src={support} className="w-5 h-5" /><p className="pl-2">Support</p></li>
            <li className="flex "><img src={settings} className="w-5 h-5" /><p className="pl-2">Setting</p></li>
            <li className="flex pb-32"><img src={Avatar} className="w-10 h-10" /><p className="pl-2 w-20">oliva rhye olivia@untitledui.com</p></li>
          </div>
        </ul>
      </div>

      <button className={`top-[50vw] absolute md:hidden ${show?'right-0':'left-[100vw]'}`} onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
    </section>


  )
}
