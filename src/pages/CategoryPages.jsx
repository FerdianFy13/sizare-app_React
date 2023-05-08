import ItemCategory from "../components/category/ItemCategory";
import HeaderNavigation from "../components/partial/HeaderNavigation";
import FooterPage from "./../components/partial/FooterPage";

const CategoryPages = () => {
  return (
    <div>
      <HeaderNavigation title="Category" />
      <ItemCategory />
      <FooterPage />
    </div>
  );
};

export default CategoryPages;
