import "./App.css"
import Navigation from "./components/navigation/Navigation"
import PizzaMia from "./pages/01_home/01_pizzamia/PizzaMia";
import ChooseSlice from "./pages/01_home/02_choose_slice/ChooseSlice";

function App() {
  return (
    <div>
      <Navigation />
      <PizzaMia />
      <ChooseSlice />
      <ChooseSlice />
    </div>
  );
}

export default App;
