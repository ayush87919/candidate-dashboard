import Group from '../assets/Group.png';
export default function Navbar() {
  return (
    <nav className="bg-blue-900">
      <ul className="flex text-white justify-center space-x-20 h-20 px-2 pb-5 pt-7 ">
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


  )
}
/* Vector */


