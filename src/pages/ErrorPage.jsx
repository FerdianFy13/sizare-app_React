import HeaderNavigation from "../components/partial/HeaderNavigation";
import FooterPage from "../components/partial/FooterPage";
import ItemError from "../components/error/ItemError";

const ErrorPage = () => {
  return (
    <div>
      <HeaderNavigation title="404 Error" />
      <ItemError />
      <FooterPage />
    </div>
  );
};

export default ErrorPage;
