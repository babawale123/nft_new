import frame from '../assets/img/Frame.png'; 
import frame1 from '../assets/img/Frame_1.png'; 
import hero_3 from '../assets/img/05.png'; 
import hero_4 from '../assets/img/06.png'; 
import hero_5 from '../assets/img/07.png'; 
import hero_6 from '../assets/img/08.png'; 
import hero_7 from '../assets/img/09.png'; 
import hero_8 from '../assets/img/10.png'; 

import holland from '../assets/img/holland.png'; 
import Adidas from '../assets/img/Adidas.png'; 
import Ritter from '../assets/img/Ritter.png'; 
import Nike from '../assets/img/Nike.png'; 


const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#0D0C1D] to-[#060714] overflow-hidden text-white">
      {/* Orbiting Items */}
      <div className="absolute w-[900px] h-[900px] flex items-center justify-center animate-spin-slow">
        {/* Container for all orbiting logos */}
        <div className="absolute w-full h-full flex items-center justify-center">
          {/* Orbiting Logos */}
         

         

          <div className="absolute w-[1200px] h-[1200px] rounded-full border border-gray-600 animate-spin-slow-reverse">
            <img
              src={hero_3}
              alt="Orbiting Item"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12"
            />
          </div>

          <div className="absolute w-[1000px] h-[1000px] rounded-full border border-gray-600 animate-spin-slow-reverse">
            <img
              src={hero_4}
              alt="Orbiting Item"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12"
            />
          </div>


          <div className="absolute w-[800px] h-[800px] rounded-full border border-gray-600 animate-spin-slow-reverse">
            <img
              src={hero_5}
              alt="Orbiting Item"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12"
            />
          </div>

          <div className="absolute w-[600px] h-[600px] rounded-full border border-gray-600 animate-spin-slow-reverse">
            <img
              src={hero_6}
              alt="Orbiting Item"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12"
            />
          </div>

          <div className="absolute w-[400px] h-[400px] rounded-full border border-gray-600 animate-spin-slow">
            <img
              src={hero_7}
              alt="Orbiting Item"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8"
            />
          </div>

          <div className="absolute w-[200px] h-[200px] rounded-full border border-gray-600 animate-spin-slow">
            <img
              src={hero_8}
              alt="Orbiting Item"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8"
            />
          </div>
        </div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-md uppercase text-gray-400 tracking-wide">
          Non Fungible Tokens
        </h2>
        <h1 className="text-5xl md:text-6xl font-extrabold my-4 flex flex-col items-center justify-center">
          <div className="flex items-center mt-2">
          <span>A new NFT</span>
          <img src={frame} alt='' className='w-[25px] h-[40px] ml-2' />
          </div>
          <div className="flex items-center mt-2 gap-x-3">
            <img src={frame1} alt='' className='w-[40px] h-[40PX] ml-2' />  
            <span className="text-blue-400">Experience</span>
          </div>
        </h1> 
        <p className="text-gray-400 text-lg mb-8">Discover, collect and sell</p>

        {/* Search Bar */}
        <div className="flex items-center justify-center bg-white rounded-full px-4 py-2 w-[120%] max-w-2xl">
          <input
            type="text"
            placeholder="Items, collections and creators"
            className="flex-1 bg-transparent text-black focus:outline-none placeholder-gray-400"
          />
          <select className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none">
            <option value="category">Category</option>
            <option value="art">Art</option>
            <option value="music">Music</option>
          </select>
          <button className="ml-2 px-6 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition">
            Search
          </button>
        </div>
      </div>

      {/* Logos at the Bottom */}
     
      <div className="absolute bottom-10 flex space-x-10">
        <img src={Ritter} alt="Logo 1" className="w-10 h-6" />
        <img src={Nike} alt="Logo 2" className="w-10 h-6" />
        <img src={Adidas} alt="Logo 3" className="w-10 h-6" />
        <img src={holland} alt="Logo 4" className="w-10 h-6" />
      </div>
    </div>
  );
};

export default HeroSection;
