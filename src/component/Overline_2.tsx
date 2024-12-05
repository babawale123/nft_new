import emoji from '../assets/img/right_image.png'; 

const FeaturedSection_new = () => {
  return (
    <div className="bg-[#060714] min-h-screen flex items-center justify-center m-20 px-8 py-16">
      {/* Container */}
      <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-white">


         {/* Right Content: Title, Description, and Buttons */}
         <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <p className="uppercase text-sm text-blue-400 tracking-wide">Overline</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Habitant tristique aliquam in vel scelerisque
          </h1>
          <p className="text-gray-400 text-lg">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>

          {/* Feature Icons */}
          <div className="flex gap-8 mt-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
                {/* Replace with an icon */}
                <span className="text-white font-bold">📘</span>
              </div>
              <div>
                <p className="font-semibold text-white">Sollicitudin sapien</p>
                <p className="text-sm text-gray-400">Cursus fermentum</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
                {/* Replace with an icon */}
                <span className="text-white font-bold">📘</span>
              </div>
              <div>
                <p className="font-semibold text-white">Pulvinar metus</p>
                <p className="text-sm text-gray-400">Nunc sed</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button className="px-6 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition">
              Get started
            </button>
            <button className="px-6 py-3 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition">
              Learn more
            </button>
          </div>
        </div>
        
        {/* Left Content: Graphic with Emoji */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative">
          <div className="w-[300px] h-[300px] flex items-center justify-center">
            {/* Emoji */}
            <img
              src={emoji}
              alt="Emoji"
              className="w-[400px] h-[400px] absolute z-10"
            />
           
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default FeaturedSection_new;
