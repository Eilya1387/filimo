import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Filter = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const options = [
    { itemname: "همه", value: "فیلم و سریال:" },
    { itemname: "فیلم", value: "فیلم" },
    { itemname: "سریال", value: "سریال" },
  ];
  const language = [
    { itemname: "همه", value: "زبان فیلم:" },
    { itemname: "فارسی (دوبله)", value: "فارسی (دوبله)" },
    { itemname: "زیرنویس فارسی", value: "زیرنویس فارسی" },
    { itemname: "زیرنویس انگلیسی", value: "زیرنویس انگلیسی" },
    { itemname: "زبان اصلی", value: "زبان اصلی" },
    { itemname: "چند زبانه", value: "چند زبانه" },
  ];
  const age = [
    { itemname: "همه", value: "رده سنی:" },
    { itemname: "زیر 3 سال", value: "زیر 3 سال" },
    { itemname: "تا 6 سال", value: "تا 6 سال" },
    { itemname: "تا 12 سال", value: "تا 12 سال" },
    { itemname: "تا 15 سال", value: "تا 15 سال" },
    { itemname: "تا 18 سال", value: "تا 18 سال" },
  ];
  const country = [
    { itemname: "ایران" },
    { itemname: "آمریکا" },
    { itemname: "ژاپن" },
    { itemname: "انگلیس" },
    { itemname: "کره جنوبی" },
    { itemname: "ترکیه" },
    { itemname: "فرانسه" },
    { itemname: "هند" },
    { itemname: "کانادا" },
    { itemname: "آلمان" },
    { itemname: "اسپانیا" },
    { itemname: "چین" },
    { itemname: "ایتالیا" },
    { itemname: "خارجی" },
    { itemname: "دیگر کشورها" },
  ];
  const genres = [
    { itemname: "درام" },
    { itemname: "کمدی" },
    { itemname: "اکشن" },
    { itemname: "عاشقانه" },
    { itemname: "هیجان‌انگیز" },
    { itemname: "جنایی" },
    { itemname: "خانوادگی" },
    { itemname: "تاریخی" },
    { itemname: "علمی-تخیلی" },
    { itemname: "ترسناک" },
    { itemname: "انیمیشن" },
    { itemname: "موزیکال" },
    { itemname: "ورزشی" },
    { itemname: "فانتزی" },
    { itemname: "جنگی" },
    { itemname: "ماجراجویی" },
    { itemname: "کوتاه" },
    { itemname: "مستند" },
    { itemname: "واقعی" },
    { itemname: "اجتماعی" },
    { itemname: "بیوگرافی" },
    { itemname: "گیم شو" },
    { itemname: "طنز" },
    { itemname: "رقابتی" },
    { itemname: "پلیسی" },
    { itemname: "مذهبی" },
    { itemname: "سایر ژانرها" },
  ];

  const [minYear, setMinYear] = useState(1370);
  const [maxYear, setMaxYear] = useState(1400);
  const [years, setYears] = useState([1370, 1400]);

  const [film, setFilm] = useState("فیلم و سریال:");
  const [languageFilm, setLanguageFilm] = useState("زبان فیلم:");
  const [ageFilm, setageFilm] = useState("رده سنی:");

  const [selected, setSelected] = useState([]);
  const [selectedGeners, setSelectedGeners] = useState([]);
  const [onHD, setOnHD] = useState(false);
  const handleCheck = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      if (selected.length < 3) {
        setSelected((prev) => [...prev, name]);
      }
    } else {
      setSelected((prev) => prev.filter((item) => item !== name));
    }
  };
  const handleCheckGeners = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      if (selectedGeners.length < 3) {
        setSelectedGeners((prev) => [...prev, name]);
      }
    } else {
      setSelectedGeners((prev) => prev.filter((item) => item !== name));
    }
  };
  const isFilterChanged =
    minYear !== 1370 ||
    maxYear !== 1400 ||
    selected.length > 0 ||
    selectedGeners.length > 0 ||
    ageFilm !== "رده سنی:" ||
    languageFilm !== "زبان فیلم:" ||
    film !== "فیلم و سریال:" ||
    onHD;

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center p-4">
        {/* --- Mobile Filter Toggle Button --- */}
        <button
          className="md:hidden w-full p-3 bg-[#ffffff14] rounded-lg text-white flex justify-between items-center"
          onClick={() => setIsFilterVisible(!isFilterVisible)}
        >
          <span>فیلتر</span>
          <i
            className={`bi bi-chevron-down transition-transform ${
              isFilterVisible ? "rotate-180" : ""
            }`}
          ></i>
        </button>

        {/* --- Filter Options --- */}
        <div
          className={`w-[95%] py-4 rounded-xl bg-[#ffffff14] ${
            isFilterVisible ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center justify-evenly flex-wrap gap-4 mt-2`}
        >
          <ul className="w-full flex flex-col md:flex-row items-center justify-evenly flex-wrap gap-2">
            {/* --- Filter Button (appears first on mobile) --- */}
            <li className="w-full md:w-auto order-last md:order-first">
              <input
                type="button"
                value="فیلتر"
                disabled={!isFilterChanged}
                className="cursor-pointer bg-white font-bold rounded-lg w-full md:w-35 h-10 disabled:bg-[#ffffff21] disabled:text-[#0000005b] disabled:cursor-default"
              />
            </li>

            {/* --- HD Toggle --- */}
            <li className="w-full md:w-auto flex flex-col items-center relative">
              <div className="peer w-full">
                <input
                  type="text"
                  value="فقط HD"
                  name=""
                  id=""
                  dir="rtl"
                  readOnly
                  className="inputs w-full"
                />
                <label className="inline-block w-9 h-4 cursor-pointer absolute left-4 top-3">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    onClick={() => setOnHD((prev) => !prev)}
                  />

                  <div className="w-full h-full bg-gray-400 rounded-full peer-checked:bg-amber-400 transition-colors duration-300"></div>
                  <div
                    className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-300 
                  peer-checked:translate-x-5"
                  ></div>
                </label>
              </div>
            </li>

            {/* --- Year Slider --- */}
            <li className="w-full md:w-auto flex flex-col items-center relative">
              <div className="peer w-full">
                <input
                  type="text"
                  value={
                    minYear === 1370 && maxYear === 1400
                      ? "سال تولید"
                      : `از سال ${minYear} تا ${maxYear}`
                  }
                  name=""
                  id=""
                  dir="rtl"
                  readOnly
                  className="inputs peer w-full"
                />
                <i className="bi bi-caret-down-fill icon"></i>
              </div>
              <ul className="bg-[#1e1e1e] w-full md:w-65 hidden flex-col p-5 rounded-xl items-end text-white peer-focus-within:flex hover:flex absolute mt-11 mr-2 z-21">
                <div className="w-full flex flex-col gap-2 text-white text-sm">
                  <div className="flex gap-1">
                    <div
                      className="bg-[#80808045] rounded-tl-xl rounded-bl-xl p-2 cursor-pointer hover:bg-[#80808081]"
                      onClick={() => {
                        setMinYear(1914);
                        setMaxYear(2025);
                        setYears([1914, 2025]);
                      }}
                    >
                      میلادی
                    </div>
                    <div
                      className="bg-[#80808045] rounded-tr-xl rounded-br-xl p-2 cursor-pointer hover:bg-[#80808081] "
                      onClick={() => {
                        setMinYear(1370);
                        setMaxYear(1400);
                        setYears([1370, 1400]);
                      }}
                    >
                      شمسی
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-white">از سال:</span>
                    <Slider
                      min={years[0]}
                      max={years[1]}
                      value={minYear}
                      onChange={setMinYear}
                      trackStyle={{ backgroundColor: "#f59e0b" }}
                      handleStyle={{
                        borderColor: "#f59e0b",
                        backgroundColor: "white",
                      }}
                      railStyle={{ backgroundColor: "#4b5563" }}
                    />
                    <span className="text-xs text-gray-400 text-end">
                      {minYear}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-white">تا سال:</span>
                    <Slider
                      min={years[0]}
                      max={years[1]}
                      value={maxYear}
                      onChange={setMaxYear}
                      trackStyle={{ backgroundColor: "#f59e0b" }}
                      handleStyle={{
                        borderColor: "#f59e0b",
                        backgroundColor: "white",
                      }}
                      railStyle={{ backgroundColor: "#4b5563" }}
                    />
                    <span className="text-xs text-gray-400 text-end">
                      {maxYear}
                    </span>
                  </div>
                </div>
              </ul>
            </li>

            {/* --- Genre Dropdown --- */}
            <li className="w-full md:w-auto flex flex-col items-center relative">
              <div className="peer w-full">
                <input
                  type="text"
                  value={
                    selectedGeners.length === 0
                      ? "ژانر:"
                      : selectedGeners.join("-")
                  }
                  name=""
                  id=""
                  dir="rtl"
                  readOnly
                  className="inputs peer w-full"
                />
                <i className="bi bi-caret-down-fill icon"></i>
              </div>
              <ul className="bg-[#1e1e1e] w-full md:w-130 hidden flex-wrap p-5 justify-end rounded-xl items-center text-white peer-focus-within:flex hover:flex absolute mt-11 mr-2 z-21">
                <div className="w-full flex justify-end text-[13px] mb-1">
                  <span className="bg-[#8080804b] rounded-xl p-1">
                    فقط سه گزینه را میتوانید انتخاب کنید{" "}
                    <i className="bi bi-info-circle text-red-700"></i>
                  </span>
                </div>
                {genres.map((item, index) => (
                  <li className="checkbox-ul" key={index}>
                    <label
                      htmlFor={item.itemname + "-genre"}
                      className="w-full cursor-pointer flex justify-end gap-1 items-center relative"
                    >
                      <span className="whitespace-nowrap">{item.itemname}</span>

                      <input
                        type="checkbox"
                        id={item.itemname + "-genre"}
                        name={item.itemname}
                        className="peer hidden"
                        onChange={handleCheckGeners}
                        checked={selectedGeners.includes(item.itemname)}
                        disabled={
                          selectedGeners.length >= 3 &&
                          !selectedGeners.includes(item.itemname)
                        }
                      />

                      <span
                        className="w-4 h-4 border border-gray-400 rounded-sm relative block
                peer-checked:border-orange-400 
                peer-checked:after:content-[''] 
                peer-checked:after:absolute 
                peer-checked:after:w-2 
                peer-checked:after:h-1 
                peer-checked:after:border-l-2 
                peer-checked:after:border-b-2 
                peer-checked:after:border-orange-400 
                peer-checked:after:-rotate-45
                peer-checked:after:top-[4px] 
                peer-checked:after:right-[3px] 
                transition-all duration-200"
                      ></span>
                    </label>
                  </li>
                ))}
              </ul>
            </li>

            {/* --- Country Dropdown --- */}
            <li className="w-full md:w-auto flex flex-col items-center relative">
              <div className="peer w-full">
                <input
                  type="text"
                  value={
                    selected.length === 0 ? "کشور سازنده:" : selected.join("-")
                  }
                  name=""
                  id=""
                  dir="rtl"
                  readOnly
                  className="inputs peer w-full"
                />
                <i className="bi bi-caret-down-fill icon"></i>
              </div>
              <ul className="bg-[#1e1e1e] w-full md:w-100 hidden flex-wrap p-5 justify-center rounded-xl items-center text-white peer-focus-within:flex hover:flex absolute mt-11 mr-2 right-0 z-21">
                <div className="w-full flex justify-end text-[13px] mb-1">
                  <span className="bg-[#8080804b] rounded-xl p-1">
                    فقط سه گزینه را میتوانید انتخاب کنید{" "}
                    <i className="bi bi-info-circle text-red-700"></i>
                  </span>
                </div>
                {country.map((item, index) => (
                  <li className="checkbox-ul" key={index}>
                    <label
                      htmlFor={item.itemname + "-country"}
                      className="w-full cursor-pointer flex justify-end gap-1 items-center relative"
                    >
                      <span className="whitespace-nowrap">{item.itemname}</span>

                      <input
                        type="checkbox"
                        id={item.itemname + "-country"}
                        name={item.itemname}
                        className="peer hidden"
                        onChange={handleCheck}
                        checked={selected.includes(item.itemname)}
                        disabled={
                          selected.length >= 3 &&
                          !selected.includes(item.itemname)
                        }
                      />

                      <span
                        className="w-4 h-4 border border-gray-400 rounded-sm relative block
                peer-checked:border-orange-400 
                peer-checked:after:content-[''] 
                peer-checked:after:absolute 
                peer-checked:after:w-2 
                peer-checked:after:h-1 
                peer-checked:after:border-l-2 
                peer-checked:after:border-b-2 
                peer-checked:after:border-orange-400 
                peer-checked:after:-rotate-45
                peer-checked:after:top-[4px] 
                peer-checked:after:right-[3px] 
                transition-all duration-200"
                      ></span>
                    </label>
                  </li>
                ))}
              </ul>
            </li>

            {/* --- Age Dropdown --- */}
            <li className="w-full md:w-auto flex flex-col items-center relative">
              <div className="peer w-full">
                <input
                  type="text"
                  value={ageFilm}
                  name=""
                  id=""
                  dir="rtl"
                  readOnly
                  className="inputs peer w-full"
                />
                <i className="bi bi-caret-down-fill icon"></i>
              </div>
              <ul className="bg-[#1e1e1e] w-full md:w-45 hidden flex-col p-5 rounded-xl items-end text-white peer-focus-within:flex absolute mt-11 mr-2 z-21">
                {age.map((item, index) => (
                  <li
                    className="item-ul"
                    key={index}
                    onMouseDown={() => setageFilm(item.value)}
                  >
                    {item.itemname}
                  </li>
                ))}
              </ul>
            </li>

            {/* --- Language Dropdown --- */}
            <li className="w-full md:w-auto flex flex-col items-center relative">
              <div className="peer w-full">
                <input
                  type="text"
                  value={languageFilm}
                  name=""
                  id=""
                  dir="rtl"
                  readOnly
                  className="inputs peer w-full"
                />
                <i className="bi bi-caret-down-fill icon"></i>
              </div>
              <ul className="bg-[#1e1e1e] w-full md:w-50 hidden flex-col p-5 rounded-xl items-end text-white peer-focus-within:flex absolute mt-11 mr-2 z-21">
                {language.map((item, index) => (
                  <li
                    className="item-ul"
                    key={index}
                    onMouseDown={() => setLanguageFilm(item.value)}
                  >
                    {item.itemname}
                  </li>
                ))}
              </ul>
            </li>

            {/* --- Film/Serial Dropdown --- */}
            <li className="w-full md:w-auto flex flex-col items-center relative">
              <div className="peer w-full">
                <input
                  type="text"
                  value={film}
                  name=""
                  id=""
                  dir="rtl"
                  readOnly
                  className="inputs peer w-full"
                />
                <i className="bi bi-caret-down-fill icon"></i>
              </div>
              <ul className="bg-[#1e1e1e] w-full md:w-40 hidden flex-col p-5 rounded-xl items-end text-white peer-focus-within:flex absolute mt-11 mr-2 z-21">
                {options.map((item, index) => (
                  <li
                    className="item-ul"
                    key={index}
                    onMouseDown={() => setFilm(item.value)}
                  >
                    {item.itemname}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </>
  );
};

export default Filter;