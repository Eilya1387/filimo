import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        className={`w-full h-18 z-30 top-0 fixed flex justify-center text-white transition-colors duration-300 ${
          scrolled ? "bg-[#151515]" : "bg-transparent"
        }`}
      >
        <div className="text-[12px] font-bold w-[90%] h-full flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="text-[15px] backdrop-blur-[10px] bg-[#ffffff17] hover:bg-[#ffffff09] text-center p-[12px] px-5 rounded-[10px] cursor-pointer">
              <Link to="/">ورود</Link>
            </div>
            <div className="hidden text-[15px] md:flex bg-[#1cb561] hover:bg-green-700 rounded-[10px] p-[12px] cursor-pointer gap-1">
              خرید اشتراک <i className="bi bi-ticket-perforated"></i>
            </div>
          </div>
          <div className="md:hidden absolute left-1/2 -translate-x-1/2">
            <a href="#">
              <img src="/filimo-logo.webp" alt="Filimo Logo" className="w-20" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-10">
              <div className="cursor-pointer item-head">
                <Link to="/search">
                  جستجو <i className="bi bi-search"></i>
                </Link>
              </div>
              <div className="cursor-pointer item-head">
                <Link to="/">فیلیمو مدرسه</Link>
              </div>
              <div className="cursor-pointer item-head">
                <Link to="/">
                  تماشای طلایی <i className="bi bi-trophy-fill text-s"></i>
                </Link>
              </div>
              <a href="#">
                <img
                  src="/filimo-logo.webp"
                  alt="Filimo Logo"
                  className="w-20"
                />
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="bi bi-grid-3x3-gap-fill text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed top-16 right-4 w-48 bg-[#1e1e1e] rounded-lg shadow-lg z-50 text-white p-2">
          <ul className="flex flex-col gap-1">
            <li className="item-ul">
              <Link to="/search" className="w-full text-right">
                جستجو <i className="bi bi-search ml-2"></i>
              </Link>
            </li>
            <li className="item-ul">
              <Link to="/search" className="w-full text-right">
                تماشای طلایی <i className="bi bi-trophy-fill text-s"></i>
              </Link>
            </li>
            <li className="item-ul">
              <Link to="/" className="w-full text-right">
                فیلیمو مدرسه
              </Link>
            </li>
            <li className="item-ul">
              <Link to="/" className="w-full text-right">
                خرید اشتراک <i className="bi bi-ticket-perforated ml-2"></i>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default TopHeader;
