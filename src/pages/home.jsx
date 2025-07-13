import TopHeader from "../components/topHeader";
import Footer from "../components/footer";
import Slider from "../components/headerSlider";
import SpecialCards from "../components/specialCards";
import Filter from "../components/filter";
import Videocardcontainer from "../components/videocardcontainer";
import { useEffect, useState } from "react";
import Loading from "../components/loading";

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
      <Footer />  
      {loading ? (
        <Loading />
      ) : (
        <>
          <Slider />
          <SpecialCards />
          <Filter />
          <Videocardcontainer />
        </>
      )}
    </>
  );
};

export default Home;
