// import { useState } from "react";
// import { SunIcon, MoonIcon } from "lucide-react";
import logo from "../assets/logo.svg";

const Header = () => {
  //   const [isDarkMode, setIsDarkMode] = useState(false);

  //   const handleToggle = () => {
  //     setIsDarkMode(!isDarkMode);
  //   };

  return (
    <header className="flex items-center justify-between text-gray-900">
      <div className="w-24 h-24 flex items-center justify-center">
        <img src={logo} alt="logo" />
      </div>

      <h1 className="text-lg md:text-xl font-bold text-center">
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
        <div className="flex items-center space-x-1">
          <span className="text-3xl font-bold text-blue-600">78</span>
          <span className="text-green-600 text-lg">▲2</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
