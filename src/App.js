import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/partial/NavigationBar";
import HomePages from "./pages/HomePages";
import ContactPages from "./pages/ContactPages";
import ArticlePages from "./pages/ArticlePages";
import CategoryPages from "./pages/CategoryPages";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route>
          <Route path="/" exact element={<HomePages />} />
          <Route path="/article" exact element={<ArticlePages />} />
          <Route path="/category" exact element={<CategoryPages />} />
          <Route path="/contact" exact element={<ContactPages />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
