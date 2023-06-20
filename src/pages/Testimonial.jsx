import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import Avatar1 from '../assets/avatartest.png'
import Letterc from '../assets/letterc.png'	
import Letterf from '../assets/letterf.png'
import Letterj from '../assets/letterj.png'
import Letterm from '../assets/letterm.png'
import Letterr from '../assets/letterr.png'
function Testimonial() {
    const starColor = "#F9D949";
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed:5000,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplaySpeed: 5000,
  
      };
  return (
    <div>
        <main className="px-12  py-4">
        <div className='flex justify-center items-center   '>
        <div className='relative   font-poppins font-bold  py-6 '>
            <h1 className='stroke-about text-8xl'>TESTIMONIAL</h1>
           
        </div>
        <div className='absolute'>
            <h1 className='font-poppins text-2xl font-bold text-[#3C486B] tracking-wider'>TESTIMONIAL</h1>
        </div>
        </div>

        <div className=''> 
        
        <Slider {...settings}>
          <div  className="px-10 ">
            <div className="flex items-center gap-1">
            <img className="w-12 h-12"src={Avatar1} alt="avatar1"/>
            <h1 className='font-poppins text-lg'>Annielou Barcelona </h1>


            </div>
            <div className="flex py-2">
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            </div>
            <p className='text-md font-poppins'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium 
                libero alias sequi at ipsum repellat possimus. Labore illum id consectetur maiores error 
                illo, alias voluptatem odit officiis iste dolor. Numquam.</p>
          </div>
          <div  className=" px-10">
            <div className="flex items-center gap-1">
            <img className="w-12 h-12"src={Letterc} alt="avatar1"/>
            <h1 className='font-poppins text-lg'>Christine Rine Calixtro </h1>


            </div>
            <div className="flex py-2">
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            </div>
            <p className='text-md font-poppins'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium 
                libero alias sequi at ipsum repellat possimus. Labore illum id consectetur maiores error 
                illo, alias voluptatem odit officiis iste dolor. Numquam.</p>
          </div>
          <div  className="px-10 ">
            <div className="flex items-center gap-1">
            <img className="w-12 h-12"src={Letterf} alt="avatar1"/>
            <h1 className='font-poppins text-lg'>Farrer John</h1>


            </div>
            <div className="flex py-2">
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            </div>
            <p className='text-md font-poppins'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium 
                libero alias sequi at ipsum repellat possimus. Labore illum id consectetur maiores error 
                illo, alias voluptatem odit officiis iste dolor. Numquam.</p>
          </div>
          <div  className="px-10 ">
            <div className="flex items-center gap-1">
            <img className="w-12 h-12"src={Letterj} alt="avatar1"/>
            <h1 className='font-poppins text-lg'>Jeric Battaler </h1>


            </div>
            <div className="flex py-2">
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            </div>
            <p className='text-md font-poppins'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium 
                libero alias sequi at ipsum repellat possimus. Labore illum id consectetur maiores error 
                illo, alias voluptatem odit officiis iste dolor. Numquam.</p>
          </div>
          <div  className="px-10 ">
            <div className="flex items-center gap-1">
            <img className="w-12 h-12"src={Letterm} alt="avatar1"/>
            <h1 className='font-poppins text-lg'>Miguel Javier Perez</h1>


            </div>
            <div className="flex py-2">
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            </div>
            <p className='text-md font-poppins'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium 
                libero alias sequi at ipsum repellat possimus. Labore illum id consectetur maiores error 
                illo, alias voluptatem odit officiis iste dolor. Numquam.</p>
          </div>
          <div  className="px-10 ">
            <div className="flex items-center gap-1">
            <img className="w-12 h-12"src={Letterr} alt="avatar1"/>
            <h1 className='font-poppins text-lg'>Riva Alejandro </h1>


            </div>
            <div className="flex py-2">
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            <AiFillStar style={{ color: starColor }}/>
            </div>
            <p className='text-md font-poppins'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium 
                libero alias sequi at ipsum repellat possimus. Labore illum id consectetur maiores error 
                illo, alias voluptatem odit officiis iste dolor. Numquam.</p>
          </div>
        </Slider>
      </div>
        </main>
    </div>
  )
}

export default Testimonial