import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import Dresses from "./Components/PriceOptions/Dresses/Dresses";
import FlowChart from "./Components/Chart/FlowChart";

function App() {
  return (
    <>
      <DaisyNav />
      <div className="max-w-[1320px] mx-auto">
        <Dresses />
        <FlowChart />
      </div>
    </>
  );
}

export default App;
