import logo from '../assets/img/logo.svg';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-[100px] bg-[linear-gradient(to_bottom,_rgba(13,_12,_29,_0.7),_rgba(30,_30,_47,_0.7))] px-8 fixed top-0 left-0 z-50">
      {/* Logo and Title */}
      <div className='flex text-white items-center gap-x-3'>
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <h1 className="text-xl font-bold">NFT MARKET</h1>
      </div>

      {/* Nav Menu */}
      <div className="hidden md:flex gap-x-8 text-white items-center">
        <a href="#home" className="hover:text-blue-400 transition">Auctions</a>
        <a href="#explore" className="hover:text-blue-400 transition">Roadmap</a>
        <a href="#about" className="hover:text-blue-400 transition">Discover</a>
        <a href="#contact" className="hover:text-blue-400 transition">Community</a>
      </div>

      {/* Sign Up and Connect Buttons */}
      <div className="flex items-center gap-x-6">
        <button className="text-white px-6 py-2 rounded-[12px] bg-gray-700 hover:bg-gray-600 transition">
          Connect
        </button>
        <button className="text-white px-6 py-2 rounded-[12px] bg-blue-500 hover:bg-blue-600 transition">
          My account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
