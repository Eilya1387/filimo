import TopHeader from "../components/topHeader";
import Footer from "../components/footer";
import Slider from "../components/headerSlider";
import SpecialCards from "../components/specialCards";
import Filter from "../components/filter";
import Videocardcontainer from "../components/videocardcontainer";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import BottomNav from "../components/BottomNav";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <TopHeader />
      <BottomNav />
      <Footer />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Slider />
          <SpecialCards />
          <Filter />
          <Videocardcontainer />
        </div>
      )}
    </>
  );
};

export default Home;