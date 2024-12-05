import hand from '../assets/img/hand.png';

const CallToAction = () => {
  return (
    <div className="bg-[#060714] p-6 rounded-2xl flex flex-col items-center text-center w-full md:w-1/3 shadow-lg">
      {/* Image Container */}
      <div className="w-[300px] h-[400px] mb-6 overflow-hidden flex items-center justify-center">
        <img
          src={hand}
          alt="Hand"
          className="w-full h-full object-cover opacity-50" // Adjust opacity for transparency
        />
      </div>
      {/* Content */}
      <h2 className="text-2xl font-bold text-white mb-4 leading-snug">
        Get started creating & selling your NFTs
      </h2>
      <p className="text-sm text-gray-400 mb-6 leading-relaxed">
        Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.
      </p>
      <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-8 rounded-lg text-base font-medium shadow-md hover:opacity-90 transition">
        Get started
      </button>
    </div>
  );
};

export default CallToAction;
