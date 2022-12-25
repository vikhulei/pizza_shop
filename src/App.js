import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation"
import { MainWrapperStyle } from "./components/ui/Wrappers"
import Home from "./pages/01_home/Home";
import MenuComponent from "./pages/02_menu/Menu";
import About from "./pages/03_about/About";

function App() {
  return (
    <MainWrapperStyle>
      <Router>
        <Navigation />
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<MenuComponent />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </MainWrapperStyle>
  );
}

export default App;
