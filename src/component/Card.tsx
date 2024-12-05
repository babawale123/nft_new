import  { useState, useEffect, useRef } from 'react';
import { FaRegClock, FaHeart } from 'react-icons/fa'; // Import the FontAwesome clock and heart icons
import image_1 from '../assets/img/image_1.png';
import image_2 from '../assets/img/image_2.png';
import image_3 from '../assets/img/image_3.png';

import hero_5 from '../assets/img/05.png'; 
import hero_2 from '../assets/img/04.png'; 
import hero_3 from '../assets/img/05.png'; 
import hero_4 from '../assets/img/06.png'; 

const CardSection = () => {
  const cardsData = [
    {
      id: 1,
      image: image_1,
      title: "Tristique diam a, enim, eros tellus. Viverra etiam",
      price: "3.19 ETH",
      initialTimeLeft: 145,
      bgColor: "#060714",
    },
    {
      id: 2,
      image: image_2,
      title: "Dui accumsan leo vestibulum ornare eu",
      price: "1.11 ETH",
      initialTimeLeft: 180,
      bgColor: "#060714",
    },
    {
      id: 3,
      image: image_3,
      title: "Senectus adipiscing nascetur",
      price: "1.63 ETH",
      initialTimeLeft: 90,
      bgColor: "#060714",
    },
    {
      id: 4,
      image: image_3,
      title: "Senectus adipiscing nascetur",
      price: "1.63 ETH",
      initialTimeLeft: 240,
      bgColor: "#060714",
    },
  ];

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const [cards, setCards] = useState(
    cardsData.map((card) => ({
      ...card,
      timeLeft: card.initialTimeLeft,
    }))
  );

  useEffect(() => {
    const timers = cards.map((_, index) => {
      const interval = setInterval(() => {
        setCards((prevCards) => {
          const updatedCards = [...prevCards];
          if (updatedCards[index].timeLeft > 0) {
            updatedCards[index].timeLeft -= 1;
          }
          return updatedCards;
        });
      }, 1000);

      return interval;
    });

    return () => {
      timers.forEach((interval) => clearInterval(interval));
    };
  }, [cards]);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-center text-white text-[36px] mb-10 font-[600]">
        <h1>Latest live auctions</h1>
      </div>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden gap-8 pb-4 scroll-smooth scroll-container"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`max-w-xs h-[600px] rounded-lg border-2 border-gray-500 overflow-hidden shadow-lg flex-shrink-0 ${card.bgColor === "white" ? "bg-white" : "bg-[#060714]"} `}
            >
              <img
                className="w-full h-[400px] object-cover p-4 rounded-[30px]"
                src={card.image}
                alt={`Card Image ${card.id}`}
              />
              <div className="p-4 flex items-center justify-between gap-x-[10px]">
                <p className="text-gray-600 text-base mt-2">{card.title}</p>
                {card.price !== "N/A" && (
                  <div className="mt-4 w-[120px] h-[36px] border-2 top-[570px] left-[325px] rounded-[4px] pt-[8px] pb-[8px] pr-[14px] pl-[14px] bg-[#262840] text-white hover:bg-white transition duration-300">
                    <p className="w-[69px] h-[15px] text-[#514CFF] pb-2">{card.price}</p>
                  </div>
                )}
              </div>
              {card.timeLeft > 0 ? (
                <div className="flex items-center ml-2 text-white">
                  <FaRegClock className="mr-2" size={18} />
                  <span>{formatTime(card.timeLeft)} min left</span>
                </div>
              ) : (
                <p className="text-white ml-2">Time's up!</p>
              )}
              <hr className="my-4 border-gray-600" />
              <div className="flex items-center px-4">
                {/* Overlapping bidder images */}
                <div className="flex -space-x-5">
                  <img className="w-10 h-10 rounded-full  border-gray-950" src={hero_5} alt="Bidder 1" />
                  <img className="w-10 h-10 rounded-full  border-gray-950" src={hero_2} alt="Bidder 2" />
                  <img className="w-10 h-10 rounded-full  border-gray-950" src={hero_3} alt="Bidder 3" />
                  <img className="w-10 h-10 rounded-full  border-gray-950" src={hero_4} alt="Bidder 4" />
                </div>
                <p className="ml-4 text-white text-[12px]">350 people bidding</p>
                  <div className='flex ml-auto text-white gap-x-2'>
                  <FaHeart className="ml-auto text-red-500" size={20} />
                    <p className='text-[12px] ml-auto'>120</p>
                    </div>                
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center justify-center w-[60px] h-[60px] bg-[#262840CC] rounded-full shadow-lg cursor-pointer z-10"
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
        </div>
        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center justify-center w-[60px] h-[60px] bg-[#262840CC] rounded-full shadow-lg cursor-pointer z-10"
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
        </div>
      </div>
    </div>
  );
};

export default CardSection;
