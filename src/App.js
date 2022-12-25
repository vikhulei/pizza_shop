import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation"
import { MainWrapperStyle } from "./components/ui/Wrappers"
import Home from "./pages/01_home/Home";
import MenuComponent from "./pages/02_menu/Menu";

function App() {
  return (
    <MainWrapperStyle>
      <Router>
        <Navigation />
        <Routes>
        <Route exect path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<MenuComponent />} />
        </Routes>
      </Router>
    </MainWrapperStyle>
  );
}

export default App;
