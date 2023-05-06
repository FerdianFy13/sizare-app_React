import Home from "./home/Home";
import FooterPage from "./partial/FooterPage";
import NavigationBar from "./partial/NavigationBar";

const Main = () => {
  return (
    <div>
      <NavigationBar />
      <Home />
      <FooterPage />
    </div>
  );
};

export default Main;
