import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="container bg-white px-6 py-3 flex items-center justify-between text-gray-light gap-2">
      <div className="w-32 h-24 flex items-center justify-center">
        <img src={logo} alt="logo" />
      </div>

      <h1 className=" md:text-2xl text-base font-semibold text-center">
        Республика Ассессмент маркази <br />
        онлайн платформаси
      </h1>

      <div className="flex items-center gap-2">
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
