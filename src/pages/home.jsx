import TopHeader from "../components/topHeader";
import Footer from "../components/footer";
import Slider from "../components/headerSlider";
import SpecialCards from "../components/specialCards";
import Filter from "../components/filter";
const Home = () => {
  return (
    <>
      <TopHeader />
      <Slider />
      <SpecialCards />
      <Filter/>
      <Footer />
    </>
  );
};

export default Home;
