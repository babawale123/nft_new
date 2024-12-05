import { useRef, useState } from "react";
import image_1 from '../assets/img/Image.svg'; // Import the image from your assets
import image_2 from '../assets/img/image_3.png'; // Import the image from your assets

const SaleOffers = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Define the type of the card objects
  interface Card {
    title: string;
    time: string;
    price: string;
    image: string; // Add the image property here
  }

  // Cards array with the image property, now using the imported image reference
  const cards: Card[] = [
    {
      title: "Fames habitasse risus ultricies tortor sit",
      time: "22:59",
      price: "2.56 ETH",
      image: image_1, 
    },
    {
      title: "Massa amet vulputate tincidunt",
      time: "10:45",
      price: "3.10 ETH",
      image: image_2 
    },
    {
      title: "Habitant volutpat viverra venenatis",
      time: "15:20",
      price: "1.89 ETH",
      image: "https://via.placeholder.com/200x100", // Replace with actual image URL
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`p-4 rounded-lg h-[600px] w-[350px] relative ${
        isDarkMode ? "bg-[#060714] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Light/Dark Mode Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`absolute top-4 right-4 py-1 px-3 rounded-lg text-sm font-medium ${
          isDarkMode
            ? "bg-gray-600 text-white hover:bg-gray-500"
            : "bg-gray-200 text-black hover:bg-gray-300"
        }`}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h2 className="text-lg font-semibold mb-2">
        Check out the hottest<br /> Sale offers
      </h2>

      {/* Wrapper for Scrollable Content and Buttons */}
      <div className="relative w-full h-[400px]">
        {/* Horizontal Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-hidden snap-x snap-mandatory h-full"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`snap-start flex-shrink-0 h-full w-[200px] p-4 rounded-lg mr-4 ${
                isDarkMode ? "bg-[#060714]" : "bg-gray-200"
              }`}
            >
              {/* Card Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-[212px] h-[250px] rounded-lg mb-4 object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm">{card.title}</span>
                <div className="flex justify-between items-center mt-2">
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {card.time}
                  </span>
                  <span className="text-sm font-semibold">{card.price}</span>
                </div>
                <hr className="mt-2" />
                <div>
                  <p>101 people bidding</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
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

      <button
        className={`mt-4 py-2 px-4 rounded-lg w-full  bg-[#262840] text-gray-400 hover:bg-[#575b81]
        }`}
      >
        Show me more
      </button>
    </div>
  );
};

export default SaleOffers;
