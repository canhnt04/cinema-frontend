import Poster from "./../components/Poster";
import FeaturedSection from "./../components/FeaturedSection";
import TrailerSection from "./../components/TrailerSection";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";
const Home = () => {
  return (
    <>
      <Poster />
      <FeaturedSection />
      <TrailerSection />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
