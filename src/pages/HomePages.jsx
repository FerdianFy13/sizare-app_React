import AboutHome from "../components/home/AboutHome";
import ArticleHome from "../components/home/ArticleHome";
import FactHome from "../components/home/FactHome";
import CarouselHome from "../components/partial/CarouselHome";
import FooterPage from "../components/partial/FooterPage";

const HomePages = () => {
  return (
    <div>
      <CarouselHome />
      <AboutHome />
      <FactHome />
      <ArticleHome />
      <FooterPage />
    </div>
  );
};

export default HomePages;
