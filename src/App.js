// import "./App.css"
import Navigation from "./components/navigation/Navigation"
import PizzaMia from "./pages/01_home/01_pizzamia/PizzaMia";

function App() {
  return (
    <div>
    {/* <div className="mainWrapper"> */}
      <Navigation />
      <PizzaMia />
    </div>
  );
}

export default App;
