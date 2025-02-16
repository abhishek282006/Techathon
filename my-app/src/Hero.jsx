import NavBar from "./NavBar";
import SocialIcons from "./SocialMedia";
import heroImg from "/src/assets/img/BgImg.svg";
import { FaDiscord} from 'react-icons/fa';
import logo from "./assets/img/logo.svg";

const Hero = () => {
  return (
    <section
      className="h-screen bg-no-repeat bg-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${heroImg})` }}>

        <NavBar/>
        <div className="h-screen flex items-center justify-center pb-20">
        <div className="flex flex-col items-center justify-center text-white text-center gap-5">
            <img src={logo} alt="logo" className="h-32 w-32 sm:h-40 sm:w-40 "/>
            <h1 className=" font-Samarkan text-[2.6rem] sm:text-[4.2rem] tracking-wide font-bold ">SANGANAK VIMARSH</h1>
            <button className="mt-6 px-6 py-3 bg-gray-300 text-black hover:bg-white rounded-lg">
                March 31, 2025
            </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-[#070D1C] text-white rounded-full border border-[#1E293B] shadow-lg hover:shadow-cyan-500/50 transition duration-300">
                <FaDiscord className="text-white text-2xl" />
                <span>Join Discord</span>
            </button>
         </div>
         </div>
         <div className="absolute right-0 bottom-0 p-4">
            <SocialIcons/>
         </div>
    </section>
  );
};

export default Hero;
