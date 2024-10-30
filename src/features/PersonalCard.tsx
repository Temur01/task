import profile from "../assets/person.png";
import tester from "../assets/Group 5.png";

const ProfileCard = () => {
  return (
    <div className="bg-white container grid lg:grid-cols-2 grid-cols-1 gap-4 relative">
      <div className="flex flex-row items-start md:gap-10 gap-5">
        <div>
          <img
            src={profile}
            alt="Azamat Sharipov"
            className="w-36 h-44 sm:w-36 sm:h-48 md:w-52 md:h-60 rounded-md object-cover"
          />
        </div>

        <div className="flex flex-grow flex-col md:space-y-8 space-y-6">
          <div>
            <h1 className="text-xl md:text-3xl font-semibold text-gray-light">
              Азамат Шарипов
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-light font-light">
              Абдуллажон угли
            </h3>
          </div>
          <div className="text-sm md:text-base md:space-y-4 space-y-6">
            <div>
              <p className="text-gray-text">
                Туғилган сана:{" "}
                <span className="font-medium text-gray-light">
                  30.09.1997 йил
                </span>
              </p>
              <p className="text-gray-text">
                Туғилган жой:{" "}
                <span className="font-medium text-gray-light">
                  Чуст ш., Наманган.
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex flex-col">
                Бўйи: <span className="font-medium">175см</span>
              </div>
              <div className="flex flex-col">
                Вазни: <span className="font-medium">70кг</span>
              </div>
              <div className="flex flex-col">
                Индекс: <span className="font-medium">22,9</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={tester} alt="Norma Icon" className="w-10 h-6" />
                <p className="text-sm text-blue-light">Норма</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-col flex-row lg:items-end gap-6">
        <p className="text-gray-text">
          <span className="text-gray-light">Лавозими:</span>
          <br />
          Қорақалпоғистон Республикаси Камбагалликни қисқартириш <br /> ва{" "}
          бандлик вазири ўринбосари
        </p>
        <p className="text-gray-text">
          <span className="text-gray-light">Номзод:</span>
          <br />
          Қорақалпоғистон Республикаси Камбагалликни қисқартириш <br /> ва
          бандлик вазири
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
