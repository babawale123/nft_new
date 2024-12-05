import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram,  } from 'react-icons/fa';
import logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D2B] text-white py-8">
      <div className="container mx-auto px-4 border border-gray-600 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-600">
          {/* Left Section */}
          <div className="p-4">
            <div className="flex gap-x-3">
              <img src={logo} alt="Logo" className="w-12 h-12" />
              <h1 className="text-2xl font-bold mb-36">NFT Market</h1>
            </div>
            <ul className="mt-4 flex space-x-4 text-sm">
              <li className="cursor-pointer hover:underline">Support</li>
              <li className="cursor-pointer hover:underline">Term of Service</li>
              <li className="cursor-pointer hover:underline">License</li>
            </ul>
          </div>

          {/* Middle Section */}
          <div className="p-4 text-center md:text-left">
            <ul className="space-y-2 mb-16">
              <li className="cursor-pointer hover:underline">Auctions</li>
              <li className="cursor-pointer hover:underline">Roadmap</li>
              <li className="cursor-pointer hover:underline">Discover</li>
              <li className="cursor-pointer hover:underline">Community</li>
            </ul>
            <button className="mt-4 bg-[#2B2BF5] text-white py-2 px-6 rounded-full hover:opacity-80">
              My Account
            </button>
            <div className="flex items-center space-x-4 mt-4 justify-center md:justify-start">
              {/* Social Media Icons */}
              <a href="#" className="hover:opacity-80">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <FaInstagram size={24} />
              </a>
            </div>
            
          </div>

          {/* Right Section */}
          <div className="p-4">
            <p className="text-sm leading-relaxed mb-36">
              Nibh volutpat, aliquam id sagittis elementum. Pellentesque iaculis
              velit, eget egestas in. Id nam semper dolor tellus vulputate eget
              turpis.
            </p>
            <div className="flex items-center mt-4">
              <input
                type="text"
                placeholder="Newsletter"
                className="flex-1 py-2 px-4 rounded-l-lg text-black"
              />
              <button className="bg-[#2B2BF5] text-white px-4 py-2 rounded-r-lg hover:opacity-80">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
