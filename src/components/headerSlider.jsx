import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import Counter from "./countdown";
const Slider = () => {
  return (
    <>
      <div className=" relative">
        <div className="absolute bottom-60 md:bottom-30 w-full px-4 flex justify-between md:left-20 md:w-auto md:gap-2 md:justify-start">
          <button className="custom-prev nav-btn">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="custom-next nav-btn">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{ delay: 4000 }}
          loop={true}
          effect="fade"
          className="w-full h-[100vh]"
        >
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center flex items-end  text-white"
              style={{ backgroundImage: "url('/slide1.webp')" }}
            >
              <div className="master-btn">
                <img src="/breakfast.webp" alt="brakfast" />
                <Counter />
                <button className="btn">
                  اطلاعات بیشتر <i class="bi bi-play-fill text-[30px]"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center  text-white"
              style={{ backgroundImage: "url('/slide2.webp')" }}
            >
              <div className="master-btn">
                <button className="btn">
                  اطلاعات بیشتر <i class="bi bi-play-fill text-[30px]"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center  text-white"
              style={{ backgroundImage: "url('/slide3.webp')" }}
            >
              <div className="master-btn">
                <img src="sharayet.webp" alt="sharayet" className="w-30" />
                <button className="btn">
                  اطلاعات بیشتر <i class="bi bi-play-fill text-[30px]"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center   text-white"
              style={{ backgroundImage: "url('/slide4.webp')" }}
            >
              <div className="master-btn">
                <img src="drop.webp" alt="drop" className="w-50" />
                <button className="btn">
                  اطلاعات بیشتر <i class="bi bi-play-fill text-[30px]"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center   text-white"
              style={{ backgroundImage: "url('/slide5.webp')" }}
            >
              <div className="master-btn">
                <img src="haftadc.webp" alt="haftadc" className="w-70" />
                <button className="btn">
                  اطلاعات بیشتر <i class="bi bi-play-fill text-[30px]"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
