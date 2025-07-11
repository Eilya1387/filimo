const Videocard = ({ thumbnail, title, country, imdb, year, gener }) => {
  return (
    <div
      className="w-43 text-white text-sm group cursor-pointer relative  "
      dir="rtl"
    >
      <div className="flex justify-center">
        <div
          className="absolute w-[80%] h-52 -top-[.4rem] rounded-xl bg-cover bg-center opacity-50 z-0 transition-all duration-300 group-hover:translate-y-3 "
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}
        ></div>

        <div
          className="absolute w-[90%] h-52 rounded-xl bg-cover bg-center z-10 -top-[.2rem]  transition-all duration-300 group-hover:translate-y-1.5"
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}
        ></div>
      </div>

      <div
        className="w-full h-55 bg-cover  relative rounded-xl z-20 transition-all duration-300"
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-2 flex flex-col gap-1 text-xg invisible group-hover:visible">
          <span
            className="bg-[#07070768] backdrop-blur-2xl w-20 rounded-lg flex justify-center"
            dir="ltr"
          >
            {imdb} imbd
          </span>
          <span>{gener}</span>
          <span className="truncate ">
            {country} · {year}
          </span>
        </div>
      </div>

      <div className="p-1 z-20 relative">
        <span className="font-bold block truncate whitespace-nowrap overflow-hidden">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Videocard;
