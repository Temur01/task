import profile from "../assets/person.png"

const ProfileCard = () => {
  return (
    <div className=" flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
     
      <div className="flex-shrink-0 flex justify-center md:justify-start">
        <img
          src={profile}
          alt="Azamat Sharipov"
          className="w-32 h-32 md:w-40 md:h-40 rounded-md object-cover"
        />
      </div>

      <div className="flex-grow space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Азамат Шарипов</h2>
        <h3 className="text-lg md:text-xl text-gray-600">Абдуллажон угли</h3>
        <div className="text-gray-700 text-sm md:text-base space-y-1">
          <p>Туғилган сана: <span className="font-medium">30.09.1997 йил</span></p>
          <p>Туғилган жой: <span className="font-medium">Чуст ш., Наманган.</span></p>
          <div className="flex items-center space-x-4">
            <p>Бўйи: <span className="font-medium">175см</span></p>
            <p>Вазни: <span className="font-medium">70кг</span></p>
            <p>Индекс: <span className="font-medium">22,9</span></p>
            <img
              src="https://example.com/norma-icon.png"
              alt="Norma Icon"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 space-y-2 text-gray-700 text-sm md:text-base">
        <p>
          <span className="font-semibold">Лавозими:</span><br />
          Қорақалпоғистон Республикаси Камбагалликни қисқартириш ва бандлик вазири ўринбосари
        </p>
        <p>
          <span className="font-semibold">Номзод:</span><br />
          Қорақалпоғистон Республикаси Камбагалликни қисқартириш ва бандлик вазири
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;