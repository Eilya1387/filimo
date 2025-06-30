import { useEffect, useState } from "react";
const TopHeader = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
          <nav
      className={`w-full h-18 z-20 top-0 fixed flex justify-center text-white transition-colors duration-300 ${
        scrolled ? "bg-[#151515]" : "bg-transparent"
      }`}
    >
        <div className="text-[15px] font-bold w-[90%] h-full flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="backdrop-blur-[10px] bg-[#ffffff17] hover:bg-[#ffffff09] text-center p-[12px] w-18 rounded-[10px] cursor-pointer">
              ورود
            </div>
            <div className="bg-[#1cb561] hover:bg-green-700 rounded-[10px] p-[12px] cursor-pointer">
              خرید اشتراک <i class="bi bi-ticket-perforated"></i>
            </div>
          </div>
          <div className="flex items-center justify-evenly gap-10 font-bold text-[12px]">
            <div className="cursor-pointer item-head">
              جستجو <i class="bi bi-search bg-ye"></i>
            </div>
            <div className="cursor-pointer item-head">فیلیمو مدرسه </div>
            <div className="cursor-pointer item-head">
              تماشای طلایی <i class="bi bi-trophy-fill"></i>
            </div>
            <div className="cursor-pointer">
              <a href="#">
                <img src="/filimo-logo.webp" alt="img" className="w-20" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopHeader;
