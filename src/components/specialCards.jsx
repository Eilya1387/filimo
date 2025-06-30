import { useState } from "react";
const SpecialCards = () => {
    const videos = [
  {
    title: "اشک هور",
    duration: "۹۰ دقیقه",
    image: "/specialcards/ashk.webp"
  },
  {
    title: "آرزو های چپکی",
    duration: "۴۵ دقیقه",
    image: "/specialcards/arezoo.webp"
  },
  {
    title: "خرس",
    duration: "۷۵ دقیقه",
    image: "/specialcards/bear.webp"
  },
  {
    title: "صبحانه با زرافه ها",
    duration: "۶۰ دقیقه",
    image: "/specialcards/breakfast.webp"
  },
  {
    title: "شمارش معکوس",
    duration: "۶۰ دقیقه",
    image: "/specialcards/countdown.webp"
  },
  {
    title: "اسفند",
    duration: "۶۰ دقیقه",
    image: "/specialcards/esfand.webp"
  },
  {
    title: "هفتاد سی",
    duration: "۶۰ دقیقه",
    image: "/specialcards/haftadc.webp"
  },
  {
    title: "هتل جهنمی",
    duration: "۶۰ دقیقه",
    image: "/specialcards/hellmotel.webp"
  },
  {
    title: "جوکر",
    duration: "۶۰ دقیقه",
    image: "/specialcards/joker.webp"
  },
  {
    title: "صداتو",
    duration: "۶۰ دقیقه",
    image: "/specialcards/sedato.webp"
  },
  {
    title: "پایگاه شادی",
    duration: "۶۰ دقیقه",
    image: "/specialcards/shadi.webp"
  },
  {
    title: "شرایط خاص",
    duration: "۶۰ دقیقه",
    image: "/specialcards/sharayet.webp"
  },
  {
    title: "بازی مرکب",
    duration: "۶۰ دقیقه",
    image: "/specialcards/squidgame.webp"
  },
  {
    title: "تشریفات",
    duration: "۶۰ دقیقه",
    image: "/specialcards/tashrifat.webp"
  },
  {
    title: "تاسیان",
    duration: "۶۰ دقیقه",
    image: "/specialcards/tasian.webp"
  },
  {
    title: "اسفند",
    duration: "۶۰ دقیقه",
    image: "/specialcards/esfand.webp"
  },
  {
    title: "هفتاد سی",
    duration: "۶۰ دقیقه",
    image: "/specialcards/haftadc.webp"
  },
  {
    title: "هتل جهنمی",
    duration: "۶۰ دقیقه",
    image: "/specialcards/hellmotel.webp"
  },
  {
    title: "جوکر",
    duration: "۶۰ دقیقه",
    image: "/specialcards/joker.webp"
  },
  {
    title: "صداتو",
    duration: "۶۰ دقیقه",
    image: "/specialcards/sedato.webp"
  },
  {
    title: "پایگاه شادی",
    duration: "۶۰ دقیقه",
    image: "/specialcards/shadi.webp"
  },
  {
    title: "شرایط خاص",
    duration: "۶۰ دقیقه",
    image: "/specialcards/sharayet.webp"
  },
  {
    title: "بازی مرکب",
    duration: "۶۰ دقیقه",
    image: "/specialcards/squidgame.webp"
  },
  {
    title: "تشریفات",
    duration: "۶۰ دقیقه",
    image: "/specialcards/tashrifat.webp"
  },
  {
    title: "تاسیان",
    duration: "۶۰ دقیقه",
    image: "/specialcards/tasian.webp"
  },
];
const [open,isOpen]=useState(false);
function handleHight() {
  isOpen(true)
}
  return <>
    <div className={`w-full mt-[-120px] p-8 z-2 relative  overflow-hidden ${open ? "max-h-300 overflow-visible" : "max-h-150"}`}>
      <div className="w-full flex items-center justify-between px-10 ">
        <span className="text-yellow-600 cursor-pointer hover:text-yellow-700">
          <i className="bi bi-chevron-left"></i> مشاهده همه
        </span>
        <span className="text-white font-bold text-lg">ویژه</span>
      </div>

<div className="flex flex-wrap gap-4 mt-8 justify-evenly ">
  {videos.map((video, idx) => (
    <div
      key={idx}
      className="relative w-[240px] h-[160px] group cursor-pointer transition-transform duration-500 hover:scale-130 hover:z-20 delay-[.3s]"
    >

      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={video.image}
          alt={video.title}
          className="w-full h-full object-cover "
        />
      </div>

      <div
        className="
          absolute  left-0 w-full
          p-3 bg-[#1e1e1e]
          border border-[#282828]
          rounded-b-lg
          z-20
           hidden
        
           group-hover:block
        "
      >
        <div
          className="
            relative z-15
            transform scale-[110%] opacity-100
          "
        >
          <div className="flex   h-25 text-white text-sm font-bold flex-col gap-2">
            <div className="w-full justify-end flex px-1"><span>{video.title}</span></div>
            <div className="w-full justify-end flex px-2"><span className="opacity-80 text-[10px] bg-[#00000068] rounded-xl p-1 ">{video.duration}</span></div>
            <div className="w-full flex items-center justify-start gap-2 px-2">
              <div className="p-1 w-9 flex text-center items-center justify-center bg-[#1cb561] rounded-[10px] text-xl"><i class="bi bi-play-fill"></i></div>
              <div className="p-1 w-9 flex text-center items-center justify-center bg-[#383737]  rounded-[10px] text-xl"><i class="bi bi-info-circle"></i></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>

  <br />
<br />
<hr className={`text-[#ffffff5a] ${open ? "hidden" : "block"}`}/>
<div className={`flex justify-center items-center mt-[-25px] ${open ? "hidden" : "flex"}`}>
<div className="flex items-center text-center text-white bg-[#151515]  rounded-[10px] border-1 w-35 h-12 justify-center cursor-pointer hover:border-2 " onClick={handleHight}><i class="bi bi-caret-down-fill"></i> مشاهده بیشتر</div>
</div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
  </>;
};

export default SpecialCards;
