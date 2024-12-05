import { useRef } from "react";
import userImage from "../assets/img/Users.png";

import hero_2 from '../assets/img/04.png'; 
import hero_3 from '../assets/img/05.png'; 
import hero_4 from '../assets/img/06.png'; 
import hero_5 from '../assets/img/07.png'; 
import hero_6 from '../assets/img/08.png'; 
import hero_7 from '../assets/img/09.png'; 
import hero_8 from '../assets/img/10.png'; 
import hero_9 from '../assets/img/11.png'; 

const DashboardComponent = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const images = [
    hero_2,
    hero_3,
    hero_4,
    hero_5,
    hero_6,
    hero_7, // Add more images as needed
    hero_8,
    hero_9,
    hero_7, // Add more images as needed
    hero_8,
    hero_9,
    hero_7, // Add more images as needed
    hero_8,
    hero_9,
    hero_7, // Add more images as needed
    hero_8,
    hero_9,
    hero_7, // Add more images as needed
    hero_8,
    hero_9,
    
  ];

  return (
    <div className="bg-[#0D0D2B] text-white min-h-screen p-8">
      {/* Stats Section */}
      <div className="flex m-20 justify-around mb-12">
        {[
          { value: "300k", label: "Users Active" },
          { value: "52,5k", label: "Artworks" },
          { value: "17,5k", label: "Artists" },
          { value: "35.58", label: "ETH Spent" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-4xl font-bold">{stat.value}</p>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Highlighted Section */}
      <div className="relative bg-gradient-to-r from-[#1E1E40] to-[#060714] p-8 rounded-xl shadow-xl mb-12 flex flex-col lg:flex-row m-20 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">
            Cursus vitae sollicitudin donec <br /> nascetur. Join now
          </h1>
          <p className="text-gray-400 mb-6">
            Donec volutpat bibendum justo,<br /> odio aenean congue est
            porttitor ut. Mauris vestibulum eros libero amet tincidunt.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#4D5CC4] hover:bg-[#5E6DD6] px-6 py-2 rounded-full font-semibold">
              Get Started
            </button>
            <button className="border border-gray-600 hover:bg-gray-700 px-6 py-2 rounded-full font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img src={userImage} alt="Showcase" className="rounded-xl shadow-lg" />
        </div>
      </div>

      {/* Scrollable Gallery */}
      <div className="relative overflow-hidden">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1E1E40] p-3 rounded-full z-10"
          onClick={scrollLeft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div
          ref={scrollContainerRef}
          className="flex pb-4 overflow-x-hidden scrollbar-hide hide-scrollbar "
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-20 h-20 flex-shrink-0 rounded-lg relative"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1E1E40] p-3 rounded-full z-10"
          onClick={scrollRight}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DashboardComponent;
