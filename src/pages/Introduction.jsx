import React from 'react'
import Header from '../components/Header'
import { SocialIcon } from 'react-social-icons';
import Avatar from '../assets/avatar.jpg'
function Introduction() {
    
  return (
  
    <div className='w-full  h-screen  2xl:h-[700px]  bg-[#F9D949] relative'>
        <img className=" absolute top-0 left-0 w-full h-full object-cover opacity-5" src="https://images.pexels.com/photos/425160/pexels-photo-425160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"alt="bg"/>
          <Header/>


        <main className='flex flex-col justify-center  px-5 py-4 items-center w-full h-full'>
            <img className='border-4 border-[#F0F0F0] rounded-full h-[170px] w-[170px]   '   src={Avatar} alt="avatar"/>
        <div className='py-3 flex flex-col items-center'>
        <h1 className='font-comforter text-4xl text-[#3C486B] font-bold'>-Hersley Cariso-</h1>
        <p className='font-poppins py-1 '>Architect/Digital Artist/Painter</p>
        </div>
        <div className='flex gap-2 z-0'>
        <SocialIcon url="https://www.facebook.com/profile.php?id=100009392704973"  bgColor="#F45050" style={{ height: 40, width: 40 }}/>
        <SocialIcon url="https://www.instagram.com/"bgColor="#F45050" style={{ height: 40, width: 40 }} />
        <SocialIcon url="https://www.twitter.com/" bgColor="#F45050" style={{ height: 40, width: 40 }}/>
        <SocialIcon url="https://www.tiktok.com/" bgColor="#F45050" style={{ height: 40, width: 40 }}/>
        </div>
        </main>
        </div>
  )
}

export default Introduction