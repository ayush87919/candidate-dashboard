import arrow from '../assets/arrow.webp';
import cloud from '../assets/cloud.png';
export default function Heading() {
    return (

        <div>
        <div className="py-10">
            <h1 className="  text-5xl font-bold ">
                Candidates
            </h1>
            <h2 className="pt-4">
                The results are in - see below for the top candidates for this role
            </h2>
      </div>
      
      <div className='mr-5 ml-'>
      <div className='border-slate-500 border-2 rounded-b-none rounded-lg border-b-0'>

        <div className="flex gap-x-96 pt-10">
        <h1 className="text-3xl font-bold w-96 pl-5">
            Top Candidate Scores
        </h1>
        <div className='pb-5'>
        <button className='flex border rounded-lg px-2 py-2'>
            <img src={cloud} className='w-5 h-6 pt-2'/>
            <p className='px-2 pt-1 '>Export report</p>
        </button>
        </div>
        </div>
        </div>
        <div className='border-slate-500 border-2 rounded-t-none rounded-lg'>
        <div className='pl-16 py-10'>
            <h1 className='flex'>
                <img src="https://source.unsplash.com/random/900%C3%97700/?forest" className ="w-24 h-24 rounded-full"/>
                <div className='pt-5'>
                <p className='font-bold text-3xl pl-4'>Head Engineer</p>
                <p className='flex pl-4'>Total number of Applications <p className='pl-2 font-bold'>250</p></p>
                <p className='flex pl-4'>Quota<p className='font-bold  px-2'>15/20</p></p>

                </div>
            </h1>
            <div className='pb-5 pl-20'>
            <h2 className='flex'>
                <p className='px-2 font-bold'></p>
            </h2>
            <h2 className='flex'>
                <p className='font-bold  px-2'></p>
            </h2>
            </div>
        </div>
        <div>
        <h1 className='flex gap-x-60 px-20 '>
                <div className='flex pr-24 '>
                <p className='pr-2'>1.</p ><img src="https://source.unsplash.com/random/900%C3%97700/?art,paint,pencils" className ="w-10 h-10 rounded-3xl"/><p className='pl-2'>Phoenix Baker<p className='max-w-96 pb-10'>Current title @Company Name</p> </p>
                </div>
            <h3 className='flex pl-40 space-x-10'>
             <div className='bg-blue-100 w-24 h-7 px-2 pt-1 rounded-lg  text-blue-400 '>
            80% match
            </div>
            <div className='pl-4 pt-1'>
            <img src={arrow} className='w-5 h-5'/>
            </div>
            </h3> 
            </h1>
           
            <h1 className='flex gap-x-80 px-20'>
                <div className='flex pr-24 '>
                <p className='pr-2'>2.</p><img src="https://source.unsplash.com/random/900%C3%97700/?caves" className ="w-10 h-10 rounded-3xl"/><p className='pl-2'>Phoenix Baker<p className='max-w-96 pb-10'>Current title @Company Name</p> </p>
                </div>
            <h3 className='flex pl-20'>
            <div className='bg-blue-100 w-24 h-7 px-2  rounded-lg  text-blue-400  '>
            80% match
            </div>
            <div className='pl-14 pt-1'>
                <img src={arrow} className='w-5 h-5'/>
            </div>
            </h3> 
            </h1>
           
            <h1 className='flex gap-x-80 px-20'>
                <div className='flex pr-24 '>
                <p className='pr-2'>3.</p><img src="https://source.unsplash.com/random/900%C3%97700/?legendary,animals" className ="w-10 h-10 rounded-3xl"/><p className='pl-2'>Phoenix Baker<p className='max-w-96 pb-10'>Current title @Company Name</p> </p>
                </div>
            <h3 className='flex pl-20'>
             <div className='bg-blue-100 rounded-lg  text-blue-400 w-24 h-7  px-2 '>
            77% match
            </div>
            <div className='pl-14 pt-1'>
                <img src={arrow} className='w-5 h-5'/>
            </div>
            </h3> 
            </h1>
            
            <h1 className='flex gap-x-80 px-20'>
                <div className='flex pr-24 '>
                <p className='pr-2'>4.</p><img src="https://source.unsplash.com/random/900%C3%97700/?buildings" className ="w-10 h-10 rounded-3xl"/><p className='pl-2'>Phoenix Baker<p className='max-w-96 pb-10'>Current title @Company Name</p> </p>
                </div>
            <h3 className='flex pl-20'>
             <div className='bg-blue-100 rounded-lg  text-blue-400 w-24 h-7 px-2 '>
            76% match
            </div>
            <div className='pl-14 pt-1'>
                <img src ={arrow} className='w-5 h-5'/>
            </div>
            </h3> 
            </h1>
            
            <h1 className='flex gap-x-80 px-20'>
                <div className='flex pr-24 '>
                <p className='pr-2'>5.</p><img src="https://source.unsplash.com/random/900%C3%97700/?fishes" className ="w-10 h-10 rounded-3xl"/><p className='pl-2'>Phoenix Baker<p className='max-w-96 pb-10'>Current title @Company Name</p> </p>
                </div>
            <h3 className='flex pl-20'>
             <div className='bg-blue-100 rounded-lg  text-blue-400 w-24 h-7 px-2 '>
            76% match
            </div>
            <div className='pl-14 pt-1'>
                <img src ={arrow} className='w-5 h-5'/>
            </div>
            </h3> 
            </h1>
         
            <h1 className='flex gap-x-80 px-20'>
                <div className='flex pr-24 '>
                <p className='pr-2'>6.</p><img src="https://source.unsplash.com/random/900%C3%97700/?oceans" className ="w-10 h-10 rounded-3xl"/><p className='pl-2'>Phoenix Baker<p className='max-w-96 pb-7'>Current title @Company Name</p> </p>
                </div>
            <h3 className='flex pl-20'>
             <div className='bg-blue-100 rounded-lg text-blue-400 w-24 h-7 px-2 '>
            76% match
            </div>
            <div className='pl-14 pt-1'>
                <img src ={arrow} className='w-5 h-5'/>
            </div>
            </h3> 
            </h1>

        </div>
      
        </div>
        </div>
        </div>
    )
  }
  
