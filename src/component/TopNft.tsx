import { FaHeart, FaRegClock } from 'react-icons/fa';
import image_2 from '../assets/img/image_3.png'; // Import the image from your assets

const TopNFTs = () => {
  const nfts = [
    {
      id: 1,
      title: "Vulputate velit viverra volutpat tristique",
      timeLeft: "22:59",
      price: "1.25 ETH",
      image: image_2,
      bidding:"101 people bidding"

    },


    {
        id: 2,
        title: "Vulputate velit viverra volutpat tristique",
        timeLeft: "22:59",
        price: "1.25 ETH",
        image: image_2,
        bidding:"101 people bidding"

      },

      {
        id: 3,
        title: "Vulputate velit viverra volutpat tristique",
        timeLeft: "22:59",
        price: "1.25 ETH",
        image: image_2,
        bidding:"101 people bidding"

      },

      {
        id: 4,
        title: "Vulputate velit viverra volutpat tristique",
        timeLeft: "22:59",
        price: "1.25 ETH",
        image: image_2,
        bidding:"101 people bidding"
      },

      {
        id: 5,
        title: "Vulputate velit viverra volutpat tristique",
        timeLeft: "22:59",
        price: "1.25 ETH",
        image: image_2,
        bidding:"101 people bidding"
      },

     


     
    
  ];

//   const formatTime = (seconds: number) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
//   };

  return (
    <div className="bg-gray-800 p-4 rounded-lg w-full md:w-1/3">
      <h2 className="text-lg font-semibold mb-4 text-white">Top NFT at a lower price</h2>
      <div className="space-y-4">
        {nfts.map((nft) => (
          <div key={nft.id} className="flex items-center gap-4">
            <img src={nft.image} alt=''  className='w-20 h-16 rounded-lg' />
            <div className="flex flex-col">
              <span className="text-sm text-white">{nft.title}</span>
              <div className='flex items-center justify-between'>
              
                  <span className='flex items-center'> <FaRegClock className="mr-2" size={18} />{nft.timeLeft} min left</span>
              
              <span className="text-sm font-semibold text-white ml-15">{nft.price}</span>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-[12px]'>{nft.bidding}</p>
                <FaHeart className="ml-auto text-red-500" size={20} />

              </div>
            </div>
          </div>
        ))}
      </div>
      <button  className={`mt-4 py-2 px-4 rounded-lg w-full  bg-[#262840] text-gray-400 hover:bg-[#575b81]
        }`}>
        Show me more
      </button>
    </div>
  );
};

export default TopNFTs;
