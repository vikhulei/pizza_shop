import "./App.css"
import Navigation from "./components/navigation/Navigation"
import PizzaMia from "./pages/01_home/01_pizzamia/PizzaMia";
import ChooseSlice from "./pages/01_home/02_choose_slice/ChooseSlice";
import SliceSlice from "./pages/01_home/03_slice_slice/SliceSlice";
import Menu from "./pages/01_home/04_menu/Menu"
import OClock from "./pages/01_home/05_oclock/Oclock"
import MinutesAway from "./pages/01_home/06_minutesAway/MinutesAway"
import Gallery from "./pages/01_home/07_gallery/Gallery"
import FunClub from "./pages/01_home/08_funClub/FunClub"
import ContactUs from "./components/contactUs/ContactUs";

function App() {
  return (
    <div>
      <Navigation />
      <PizzaMia />
      <ChooseSlice />
      <SliceSlice />
      <Menu />
      <OClock />
      <MinutesAway />
      <Gallery />
      <FunClub />
      <ContactUs />
    </div>
  );
}

export default App;
