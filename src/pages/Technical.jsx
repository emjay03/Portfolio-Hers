import React from 'react'
import Autocad from '../assets/autocad.png'
import Bim from '../assets/bim.png'
import Sketchup from '../assets/skethup.png'
import Max from '../assets/3max.png'
function Technical() {
  return (
    <div>
        <main className='px-5 py-4'>
        <div className='flex justify-center items-center   '>
        <div className='relative   font-poppins font-bold  py-6 '>
            <h1 className='stroke-about text-8xl'>SKILLS</h1>
           
        </div>
        <div className='absolute'>
            <h1 className='font-poppins text-2xl font-bold text-[#3C486B] tracking-wider'>SKILLS</h1>
        </div>
        </div>
        <div className="flex flex-row gap-4 font-poppins">
<div className='w-full'>
    <h1 className='text-center text-xl underline decoration-[#F45050]'>Technical Skills and Tools </h1>
    
    <div className='py-2'></div>
<div className='grid grid-cols-4 gap-2'>
<div className='flex  flex-col justify-center items-center bg-[#F0F0F0] py-2'>
<img  className="w-20"src={Autocad} alt="Autocad"/>
<p className='text-center text-sm'>Autocad</p>
</div>
<div className='flex  flex-col justify-center items-center bg-[#F0F0F0] py-2'>
<img  className="w-20"src={Bim} alt="Autocad"/>
<p className="text-center text-sm">BIM</p>
</div>
<div className='flex  flex-col justify-center items-center bg-[#F0F0F0] py-2'>
<img  className="w-10"src={Sketchup} alt="Autocad"/>
<p className='text-center text-sm'>SketchUp</p>
</div>
<div className='flex  flex-col justify-center items-center bg-[#F0F0F0] py-2'>
<img  className="w-10"src={Max} alt="Autocad"/>
<p className='text-center text-sm'>3 Max</p>
</div>
</div>
<div className='py-2'></div>
<div className='grid grid-cols-4 gap-2'>
<div className='flex  flex-col justify-center items-center bg-[#F0F0F0] py-2'>
<img  className="w-20"src={Autocad} alt="Autocad"/>
<p className='text-center text-sm'>Autocad</p>
</div>
<div className='flex  flex-col justify-center items-center bg-[#F0F0F0] py-2'>
<img  className="w-20"src={Bim} alt="Autocad"/>
<p className="text-center text-sm">BIM</p>
</div>
<div className='flex  flex-col justify-center items-center bg-[#F0F0F0] py-2'>
<img  className="w-10"src={Sketchup} alt="Autocad"/>
<p className='text-center text-sm'>SketchUp</p>
</div>
<div className='flex  flex-col justify-center items-center bg-[#F0F0F0] py-2'>
<img  className="w-10"src={Max} alt="Autocad"/>
<p className='text-center text-sm'>3 Max</p>
</div>
</div>
</div>
<div className='w-full'><h1 className='text-center text-xl'>Artistic Skills</h1>
<div className='grid grid-cols-2'>
<div className='flex   justify-center items-center bg-[#F0F0F0] py-2'>
 
<p className='text-center text-sm'>Portrait</p>
</div>
<div className='flex   justify-center items-center bg-[#F0F0F0] py-2'>
 
<p className='text-center text-sm'>Portrait</p>
</div>
<div className='flex   justify-center items-center bg-[#F0F0F0] py-2'>
 
<p className='text-center text-sm'>Portrait</p>
</div>
</div>
</div>
        </div>
        </main>
    </div>
  )
}

export default Technical