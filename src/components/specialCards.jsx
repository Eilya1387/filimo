import { useState } from "react";

const SpecialCards = () => {
  const [showAll, setShowAll] = useState(false);

  const videos = [
    {
      title: "اشک هور",
      duration: "۹۰ دقیقه",
      image: "/specialcards/ashk.webp",
    },
    {
      title: "آرزو های چپکی",
      duration: "۴۵ دقیقه",
      image: "/specialcards/arezoo.webp",
    },
    { title: "خرس", duration: "۷۵ دقیقه", image: "/specialcards/bear.webp" },
    {
      title: "صبحانه با زرافه ها",
      duration: "۶۰ دقیقه",
      image: "/specialcards/breakfast.webp",
    },
    {
      title: "شمارش معکوس",
      duration: "۶۰ دقیقه",
      image: "/specialcards/countdown.webp",
    },
    {
      title: "اسفند",
      duration: "۶۰ دقیقه",
      image: "/specialcards/esfand.webp",
    },
    {
      title: "هفتاد سی",
      duration: "۶۰ دقیقه",
      image: "/specialcards/haftadc.webp",
    },
    {
      title: "هتل جهنمی",
      duration: "۶۰ دقیقه",
      image: "/specialcards/hellmotel.webp",
    },
    { title: "جوکر", duration: "۶۰ دقیقه", image: "/specialcards/joker.webp" },
    {
      title: "صداتو",
      duration: "۶۰ دقیقه",
      image: "/specialcards/sedato.webp",
    },
    {
      title: "پایگاه شادی",
      duration: "۶۰ دقیقه",
      image: "/specialcards/shadi.webp",
    },
    {
      title: "شرایط خاص",
      duration: "۶۰ دقیقه",
      image: "/specialcards/sharayet.webp",
    },
    {
      title: "بازی مرکب",
      duration: "۶۰ دقیقه",
      image: "/specialcards/squidgame.webp",
    },
    {
      title: "تشریفات",
      duration: "۶۰ دقیقه",
      image: "/specialcards/tashrifat.webp",
    },
    {
      title: "تاسیان",
      duration: "۶۰ دقیقه",
      image: "/specialcards/tasian.webp",
    },
    {
      title: "سرخ پوست",
      duration: "۶۰ دقیقه",
      image: "/specialcards/sorkhpoost.webp",
    },
    {
      title: "ملبورن",
      duration: "۶۰ دقیقه",
      image: "/specialcards/melboron.webp",
    },
    {
      title: "اکنون",
      duration: "۶۰ دقیقه",
      image: "/specialcards/aknoon.webp",
    },
    {
      title: "بازگشت به قصر",
      duration: "۶۰ دقیقه",
      image: "/specialcards/back.webp",
    },
    {
      title: "بی قرار",
      duration: "۶۰ دقیقه",
      image: "/specialcards/bigharar.webp",
    },
    {
      title: "بیگانه",
      duration: "۶۰ دقیقه",
      image: "/specialcards/bigane.webp",
    },
    {
      title: "برانداز",
      duration: "۶۰ دقیقه",
      image: "/specialcards/barandaz.webp",
    },
    {
      title: "پوشش عمیق",
      duration: "۶۰ دقیقه",
      image: "/specialcards/cover.webp",
    },
    {
      title: "آپارات کست",
      duration: "۶۰ دقیقه",
      image: "/specialcards/aparat.webp",
    },
    {
      title: "آسمان حسینی",
      duration: "۶۰ دقیقه",
      image: "/specialcards/aseman.webp",
    },
  ];

  const visibleVideos = showAll ? videos : videos.slice(0, 15);

  return (
    <>
      <div className="w-full mt-[-120px] p-8 relative z-2">
        <div className="w-full flex items-center justify-between px-10">
          <span className="text-yellow-600 cursor-pointer hover:text-yellow-700">
            <i className="bi bi-chevron-left"></i> مشاهده همه
          </span>
          <span className="text-white font-bold text-lg">ویژه</span>
        </div>

        <div className="flex flex-wrap gap-4 mt-8 justify-evenly">
          {visibleVideos.map((video, idx) => (
            <div
              key={idx}
              className="relative w-[240px] h-[160px] group cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-20 group:"
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg group-hover:rounded-b-none shadow-lg">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute left-0 w-full p-3 bg-[#1e1e1e] border border-[#282828] rounded-b-lg z-20 hidden group-hover:block ">
                <div className="relative z-15 transform scale-[110%] opacity-100">
                  <div className="flex flex-col gap-2 text-white text-sm font-bold">
                    <div className="w-full flex justify-end px-1">
                      <span>{video.title}</span>
                    </div>
                    <div className="w-full flex justify-end px-2">
                      <span className="opacity-80 text-[10px] bg-[#00000068] rounded-xl p-1">
                        {video.duration}
                      </span>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2 px-2">
                      <div className="p-1 w-9 flex items-center justify-center bg-[#1cb561] rounded-[10px] text-xl">
                        <i className="bi bi-play-fill"></i>
                      </div>
                      <div className="p-1 w-9 flex items-center justify-center bg-[#383737] rounded-[10px] text-xl">
                        <i className="bi bi-info-circle"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <hr className={`text-[#ffffff5a] ${showAll ? "hidden" : "block"}`} />
      {!showAll && (
        <div className="flex justify-center items-center mt-[-25px]">
          <div
            className="flex items-center text-center text-white bg-[#151515] rounded-[10px] border w-35 h-12 justify-center cursor-pointer hover:border-2"
            onClick={() => setShowAll(true)}
          >
            <i className="bi bi-caret-down-fill"></i> مشاهده بیشتر
          </div>
        </div>
      )}
      <br />
      <br />
    </>
  );
};

export default SpecialCards;
