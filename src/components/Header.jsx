
import React,{useState,useEffect} from 'react'

function Header() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className={`m-auto fixed top-0 left-0 w-full px-5 py-4 bg-[#F0F0F0] z-50 delay-75 duration-150 transition-all ${isVisible ? 'block' : 'hidden'}`}>
        <nav className='flex justify-between items-center'>
            <h1 className='font-poppins text-3xl font-bold italic text-[#3C486B] '>Her<span className='text-[#F45050] font-comforter '>.Arki</span></h1>
            <ul className='flex font-[Poppins,san-serif] gap-6'>
                <li className=''><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/project">Project</a></li>
                <li><a href="/technical">Technical Skill</a></li>
                <li><a href="/testimonial">Testimonial</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header