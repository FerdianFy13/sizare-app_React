import ItemArticles from "../components/article/ItemArticles";
import FooterPage from "../components/partial/FooterPage";
import HeaderNavigation from "../components/partial/HeaderNavigation";

const ArticlePages = () => {
  return (
    <div>
      <HeaderNavigation title="Article" />
      <ItemArticles />
      <FooterPage />
    </div>
  );
};

export default ArticlePages;
