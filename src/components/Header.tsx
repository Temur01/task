import useTheme from "../hooks/useTheme";
import logo from "../assets/logo.svg";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`container px-6 py-3 flex items-center justify-between gap-2 ${
        theme === "dark"
          ? "bg-dark-gray-light text-dark-slate-light"
          : "bg-white text-gray-light"
      }`}
    >
      <div className="w-32 h-24 flex items-center justify-center">
        <img src={logo} alt="logo" />
      </div>

      <h1
        className={`md:text-2xl text-base font-semibold text-center ${
          theme === "dark" ? "text-dark-gray-text" : "text-gray-light"
        }`}
      >
        Республика Ассессмент маркази <br />
        онлайн платформаси
      </h1>

      <div className="flex items-center gap-2">
        <div className="flex items-center relative w-16">
          <span
            className={`text-3xl font-bold ${
              theme === "dark" ? "text-dark-blue-light" : "text-blue-light"
            }`}
          >
            78
          </span>
          <span
            className={`font-semibold text-lg absolute -top-2 right-0 flex items-center gap-0.5 ${
              theme === "dark" ? "text-dark-green-light" : "text-green-light"
            }`}
          >
            <span className="text-[8px]">▲</span>2
          </span>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-xl focus:outline-none focus:ring focus:ring-blue-light"
        >
          {theme === "dark" ? (
            <Sun color="currentColor" />
          ) : (
            <Moon color="currentColor" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
