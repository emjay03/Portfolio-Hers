import React, { useState } from 'react';
function Project() {
    const [isFullScreen, setIsFullScreen] = useState(false);

  const handleViewClick = () => {
    setIsFullScreen(true);
  };

  const handleCloseClick = () => {
    setIsFullScreen(false);
  };
  return (
    <div>
        <main className=' px-5 py-4'>
        <div className='flex justify-center items-center   '>
        <div className='relative   font-poppins font-bold  py-6 '>
            <h1 className='stroke-about text-8xl'>PROJECT</h1>
           
        </div>
        <div className='absolute'>
            <h1 className='font-poppins text-2xl font-bold text-[#3C486B] tracking-wider'>PROJECT</h1>
        </div>
        </div>
        <div class="grid grid-cols-4 gap-4 font-poppins ">
        <div className="shadow-lg hover:scale-105 transition-all cursor-pointer">
      <div className="relative">
        <img
          src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
          alt="cat"
          className="object-cover"
        />
        {isFullScreen && (
          <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black flex items-center justify-center">
            <div className="relative">
              <button className="absolute top-0 right-0 m-4 text-white" onClick={handleCloseClick}>
                Close
              </button>
              <img
                src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
                alt="cat"
                className="h-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="font-bold text-[#3C486B] text-xl">Cat best food ever</p>
        <p className="text-sm italic font-normal py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus unde nostrum culpa! Maiores unde
          alias  , minus officia numquam mollitia veniam porro facere esse.
        </p>
        <div className="flex font-light text-sm gap-2 ">
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
        </div>
        <div className="py-2"></div>
        <button  className="  bg-[#F9D949] py-2 w-full "onClick={handleViewClick}>View</button>
      </div>
    </div>
    <div className="shadow-lg hover:scale-105 transition-all cursor-pointer">
      <div className="relative">
        <img
          src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
          alt="cat"
          className="object-cover"
        />
        {isFullScreen && (
          <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black flex items-center justify-center">
            <div className="relative">
              <button className="absolute top-0 right-0 m-4 text-white" onClick={handleCloseClick}>
                Close
              </button>
              <img
                src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
                alt="cat"
                className="h-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="font-bold text-[#3C486B] text-xl">Cat best food ever</p>
        <p className="text-sm italic font-normal py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus unde nostrum culpa! Maiores unde
          alias  , minus officia numquam mollitia veniam porro facere esse.
        </p>
        <div className="flex font-light text-sm gap-2 ">
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
        </div>
        <div className="py-2"></div>
        <button  className="  bg-[#F9D949] py-2 w-full "onClick={handleViewClick}>View</button>
      </div>
    </div>
    <div className="shadow-lg hover:scale-105 transition-all cursor-pointer">
      <div className="relative">
        <img
          src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
          alt="cat"
          className="object-cover"
        />
        {isFullScreen && (
          <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black flex items-center justify-center">
            <div className="relative">
              <button className="absolute top-0 right-0 m-4 text-white" onClick={handleCloseClick}>
                Close
              </button>
              <img
                src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
                alt="cat"
                className="h-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="font-bold text-[#3C486B] text-xl">Cat best food ever</p>
        <p className="text-sm italic font-normal py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus unde nostrum culpa! Maiores unde
          alias  , minus officia numquam mollitia veniam porro facere esse.
        </p>
        <div className="flex font-light text-sm gap-2 ">
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
        </div>
        <div className="py-2"></div>
        <button  className="  bg-[#F9D949] py-2 w-full "onClick={handleViewClick}>View</button>
      </div>
    </div>
    <div className="shadow-lg hover:scale-105 transition-all cursor-pointer">
      <div className="relative">
        <img
          src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
          alt="cat"
          className="object-cover"
        />
        {isFullScreen && (
          <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black flex items-center justify-center">
            <div className="relative">
              <button className="absolute top-0 right-0 m-4 text-white" onClick={handleCloseClick}>
                Close
              </button>
              <img
                src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
                alt="cat"
                className="h-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="font-bold text-[#3C486B] text-xl">Cat best food ever</p>
        <p className="text-sm italic font-normal py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus unde nostrum culpa! Maiores unde
          alias  , minus officia numquam mollitia veniam porro facere esse.
        </p>
        <div className="flex font-light text-sm gap-2 ">
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
        </div>
        <div className="py-2"></div>
        <button  className="  bg-[#F9D949] py-2 w-full "onClick={handleViewClick}>View</button>
      </div>
    </div>
         
        </div>
        <div className="py-2"></div>
        <div class="grid grid-cols-4 gap-4 font-poppins ">
        <div className="shadow-lg hover:scale-105 transition-all cursor-pointer">
      <div className="relative">
        <img
          src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
          alt="cat"
          className="object-cover"
        />
        {isFullScreen && (
          <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black flex items-center justify-center">
            <div className="relative">
              <button className="absolute top-0 right-0 m-4 text-white" onClick={handleCloseClick}>
                Close
              </button>
              <img
                src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
                alt="cat"
                className="h-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="font-bold text-[#3C486B] text-xl">Cat best food ever</p>
        <p className="text-sm italic font-normal py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus unde nostrum culpa! Maiores unde
          alias  , minus officia numquam mollitia veniam porro facere esse.
        </p>
        <div className="flex font-light text-sm gap-2 ">
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
        </div>
        <div className="py-2"></div>
        <button  className="  bg-[#F9D949] py-2 w-full "onClick={handleViewClick}>View</button>
      </div>
    </div>
    <div className="shadow-lg hover:scale-105 transition-all cursor-pointer">
      <div className="relative">
        <img
          src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
          alt="cat"
          className="object-cover"
        />
        {isFullScreen && (
          <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black flex items-center justify-center">
            <div className="relative">
              <button className="absolute top-0 right-0 m-4 text-white" onClick={handleCloseClick}>
                Close
              </button>
              <img
                src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
                alt="cat"
                className="h-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="font-bold text-[#3C486B] text-xl">Cat best food ever</p>
        <p className="text-sm italic font-normal py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus unde nostrum culpa! Maiores unde
          alias  , minus officia numquam mollitia veniam porro facere esse.
        </p>
        <div className="flex font-light text-sm gap-2 ">
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
        </div>
        <div className="py-2"></div>
        <button  className="  bg-[#F9D949] py-2 w-full "onClick={handleViewClick}>View</button>
      </div>
    </div>
    <div className="shadow-lg hover:scale-105 transition-all cursor-pointer">
      <div className="relative">
        <img
          src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
          alt="cat"
          className="object-cover"
        />
        {isFullScreen && (
          <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black flex items-center justify-center">
            <div className="relative">
              <button className="absolute top-0 right-0 m-4 text-white" onClick={handleCloseClick}>
                Close
              </button>
              <img
                src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
                alt="cat"
                className="h-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="font-bold text-[#3C486B] text-xl">Cat best food ever</p>
        <p className="text-sm italic font-normal py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus unde nostrum culpa! Maiores unde
          alias  , minus officia numquam mollitia veniam porro facere esse.
        </p>
        <div className="flex font-light text-sm gap-2 ">
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
        </div>
        <div className="py-2"></div>
        <button  className="  bg-[#F9D949] py-2 w-full "onClick={handleViewClick}>View</button>
      </div>
    </div>
    <div className="shadow-lg hover:scale-105 transition-all cursor-pointer">
      <div className="relative">
        <img
          src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
          alt="cat"
          className="object-cover"
        />
        {isFullScreen && (
          <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black flex items-center justify-center">
            <div className="relative">
              <button className="absolute top-0 right-0 m-4 text-white" onClick={handleCloseClick}>
                Close
              </button>
              <img
                src="https://w0.peakpx.com/wallpaper/74/919/HD-wallpaper-black-and-white-cats-cute-animals-3d-art-yin-and-yang-cartoon-cats-white-cat-black-cat.jpg"
                alt="cat"
                className="h-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="font-bold text-[#3C486B] text-xl">Cat best food ever</p>
        <p className="text-sm italic font-normal py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus unde nostrum culpa! Maiores unde
          alias  , minus officia numquam mollitia veniam porro facere esse.
        </p>
        <div className="flex font-light text-sm gap-2 ">
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
          <span>#Cat</span>
        </div>
        <div className="py-2"></div>
        <button  className="  bg-[#F9D949] py-2 w-full "onClick={handleViewClick}>View</button>
      </div>
    </div>
         
        </div>
        </main>
    </div>
  )
}

export default Project