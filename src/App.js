import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation"
import { MainWrapper } from "./components/ui/MainWrapper"
import Home from "./pages/01_home/Home";

function App() {
  return (
    <MainWrapper>
      <Router>
        <Navigation />
        <Routes>
        <Route exect path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </MainWrapper>
  );
}

export default App;
