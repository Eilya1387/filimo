const Footer = () => {
  return (
    <>
      <footer className="z-21 text-[12px] font-bold flex items-center w-full h-9 bg-[#151515] fixed bottom-0 justify-center text-white">
        <div className="flex items-center justify-between w-[90%]">
          <div className="relative group">
            <span className="item-head ">
              <i class="bi bi-caret-up-fill"></i> شبکه های اجتماعی
            </span>

            <ul className="bg-[#1e1e1e]  rounded-[10px] absolute bottom-5 p-5 w-40  flex flex-col justify-center items-end gap-3 text-center invisible group-hover:visible">
              <li className="item-ul">
                آپارات <i class="bi bi-camera-reels"></i>
              </li>
              <li className="item-ul">
                تلگرام <i class="bi bi-telegram"></i>
              </li>
              <li className="item-ul">
                توییتر <i class="bi bi-twitter"></i>
              </li>
              <li className="item-ul">
                اینستاگرام <i class="bi bi-instagram"></i>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <div className="item-head group">
              سایر لینک ها
              <ul className="bg-[#1e1e1e]  rounded-[10px] absolute bottom-6 right-0 p-5 w-50  flex flex-col justify-center items-end gap-2 text-center invisible group-hover:visible">
                <li className="item-ul"> قوانین</li>
                <li className="item-ul"> به ما بپیوندید</li>
                <li className="item-ul"> تبلیغات در فیلیمو</li>
                <li className="item-ul"> لوگو</li>
                <li className="item-ul"> دانلود فیلم و سریال</li>
              </ul>
            </div>
            <div className="item-head">فروشگاه</div>
            <div className="item-head">تماس و پشتیبانی</div>
            <div className="item-head">اپلیکیشن ها</div>
            <div className="item-head">
              تماشا با تلویزیون <i class="bi bi-tv"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
