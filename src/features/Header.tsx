// import { useState } from "react";
// import { SunIcon, MoonIcon } from "lucide-react";
import logo from "../assets/logo.svg";

const Header = () => {
  //   const [isDarkMode, setIsDarkMode] = useState(false);

  //   const handleToggle = () => {
  //     setIsDarkMode(!isDarkMode);
  //   };

  return (
    <header className="container bg-white px-6 flex items-center justify-between text-gray-light">
      <div className="w-28 h-24 flex items-center justify-center">
        <img src={logo} alt="logo" />
      </div>

      <h1 className="text-xl md:text-2xl font-semibold text-center">
        Республика Ассессмент маркази <br />
        онлайн платформаси
      </h1>

      <div className="flex items-center gap-2">
        {/* <button
          onClick={handleToggle}
          className="flex items-center p-2 rounded-full focus:outline-none"
          aria-label="Toggle Dark Mode UI"
        >
          {isDarkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800" />
          )}
        </button> */}
        <div className="flex items-center relative w-16">
          <span className="text-3xl font-bold text-blue-light">78</span>
          <span className="font-semibold text-green-light text-lg absolute -top-2 right-0 flex items-center gap-0.5">
            <span className="text-[8px]">▲</span>2
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
