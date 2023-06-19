import React from 'react'
import Avatar from '../assets/avatar.jpg'
import {BiStore} from "react-icons/bi";
function about() {
  return (
    <div className='w-full h-full'>
       <main className='flex flex-col justify-center items-center  px-5 py-4'>
        <div className='flex justify-center items-center   just'>
        <div className='relative   font-poppins font-bold  py-6 '>
            <h1 className='stroke-about text-8xl'>ABOUT</h1>
           
        </div>
        <div className='absolute'>
            <h1 className='font-poppins text-2xl font-bold text-[#3C486B] tracking-wider'>ABOUT</h1>
        </div>
        </div>
        <div className='flex flex-row gap-5'>
        <div className='w-full relative'>
      <img className='w-[500px] filter grayscale' src={Avatar} alt="hersley" />
      <div className='absolute inset-0  flex items-center justify-center py-10 pl-80'>
        <div className='  border-[7px] border-[#F45050] p-4 h-full w-full'>
          {/* Content inside the border box */}
        </div>
      </div>
    </div>

    <div className='w-full'> 
    <h1 className='font-poppins text-4xl font-bold'>Hello There!</h1>
    <div className='py-2'></div>
        <p className='font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt quia
             cum animi non, laudantium provident, consectetur quidem nobis vero numquam. Repudiandae 
             quia expedita, impedit assumenda cum totam ab hic Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quam illum veniam odio error laboriosam rem nemo adipisci tempora, nulla perspiciatis beatae
              omnis deserunt deleniti enim modi corporis veritatis alias!</p>
              <div className='py-4'></div>
              <p className='font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt quia
             cum animi non, laudantium provident, consectetur quidem nobis vero numquam. Repudiandae 
             quia expedita, impedit assumenda cum totam ab hic Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quam illum veniam odio error laboriosam rem nemo adipisci tempora, nulla perspiciatis beatae
              omnis deserunt deleniti enim modi corporis veritatis alias!</p>
   
   <div className='py-2'></div>
   <button className="flex  justify-center items-center font-poppins gap-1 font-semibold   px-6 py-4 bg-[#F9D949] rounded-md hover:scale-105 transition-all">
    Store  <BiStore/></button>
    
    </div>
        </div>
        </main>     
    </div>
      )
}

export default about