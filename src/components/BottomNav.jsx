import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <footer className="md:hidden z-30 text-sm font-bold flex items-center w-full h-16 bg-[#151515] fixed bottom-0 justify-center text-white border-t border-t-[#3a3a3a]">
      <div className="flex items-center justify-around w-full h-full">
        <Link to="/" className="bottom-nav-item">
          <i className="bi bi-house-door text-2xl"></i>
          <span>خانه</span>
        </Link>
        <Link to="/" className="bottom-nav-item">
          <i className="bi bi-collection-play text-2xl"></i>
          <span>ویترین</span>
        </Link>
        <Link to="/search" className="bottom-nav-item">
          <i className="bi bi-search text-2xl"></i>
          <span>جستجو</span>
        </Link>
        <Link to="/" className="bottom-nav-item">
          <i className="bi bi-list-stars text-2xl"></i>
          <span>دسته بندی</span>
        </Link>
        <Link to="/" className="bottom-nav-item text-yellow-400">
          <i className="bi bi-fire text-2xl"></i>
          <span>داغ</span>
        </Link>
      </div>
    </footer>
  );
};

export default BottomNav;