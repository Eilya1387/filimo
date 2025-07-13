import { useEffect, useState } from "react";
import axios from "axios";
import Videocard from "./videocard";

const Videocardcontainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const ids = Array.from({ length: 10 }, (_, i) => i + 1);
        const requests = ids.map((id) =>
          axios.get(`${import.meta.env.VITE_MOVIES_API}/${id}`)
        );
        const responses = await Promise.all(requests);
        const simplified = responses.map((res) => {
          const { title, year, poster, imdb_rating, genres, country } =
            res.data;
          return {
            title,
            year,
            thumbnail: poster,
            imdb: imdb_rating,
            gener: genres?.[0] || "نامشخص",
            country: country || "ناشناخته",
          };
        });
        setMovies(simplified);
      } catch (err) {
        console.error("خطا در دریافت فیلم‌ها:", err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col h-80">
        <div className="w-full flex items-center justify-between px-10">
          <span className="text-yellow-600 cursor-pointer hover:text-yellow-700">
            <i className="bi bi-chevron-left"></i> مشاهده همه
          </span>
          <span className="text-white font-bold text-lg">بهترین ها</span>
        </div>

        <div className="overflow-x-hidden w-full  mt-4 mr-5 pr-5" dir="rtl">
          <div className="inline-flex gap-4 mt-5">
            {movies.map((movie, index) => (
              <Videocard key={index} {...movie} />
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Videocardcontainer;
