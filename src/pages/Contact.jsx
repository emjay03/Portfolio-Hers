import React from "react";
import { AiFillPhone } from "react-icons/ai";
function Contact() {
  return (
    <div className=" ">
      <main>
        <div className="flex justify-center items-center   mb-[70px] ">
          <div className="relative   font-poppins font-bold  py-6 ">
            <h1 className="stroke-about text-8xl">CONTACT</h1>
          </div>
          <div className="absolute">
            <h1 className="font-poppins text-2xl font-bold text-[#3C486B] tracking-wider">
              CONTACT
            </h1>
          </div>
        </div>

        <div className="px-5 mb-[260px] py-10 flex flex-row bg-[#F9D949] font-poppins  gap-4 ">
            <div className="w-full">
          <h1 className=" text-4xl font-semibold  ">GET IN TOUCH</h1>
          <div className="py-2"></div>
          <h2 className="text-md">
            Have a question? Send us a message and we’ll get back to you as soon
            as possible.
          </h2>
<div className="py-2"></div>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            consequatur earum suscipit repudiandae. Dolorum error dignissimos
            hic rerum commodi deleniti, culpa iusto ducimus molestiae
            distinctio, illo cupiditate nemo veniam quisquam!
          </p>
          <div className="py-2"></div>
          <button className="flex gap-1 justify-center items-center bg-[#F0F0F0] px-5 py-4 rounded-md text-sm font-semibold hover:scale-105 transition-all delay-150"><AiFillPhone/>Send Message</button>
        </div>
        <div className="w-full relative  ">
            <div className="absolute top-[-80px] bottom-0"> 
            <img className="border-4 border-[#F0F0F0]"src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80" alt="contact" />
        </div>
        </div>
        </div>
        
      </main>
    </div>
  );
}

export default Contact;
