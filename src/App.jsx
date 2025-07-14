import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import Dresses from "./Components/PriceOptions/Dresses/Dresses";

function App() {
  return (
    <>
      <DaisyNav />
      <div className="max-w-[1320px] mx-auto">
        <Dresses />
      </div>
    </>
  );
}

export default App;
