import KilosToGallonsForm from "./components/KilosToPounds";
import NeededPoundsForm from "./components/NeededPounds";
import PoundsToGallonsForm from "./components/PoundsToGallons";
import TotalPoundsForm from "./components/TotalWeight";

function App() {
  return (
    <div className="App">
      <NeededPoundsForm />
      <br />
      <br />
      <PoundsToGallonsForm />
      <br />
      <br />
      <TotalPoundsForm />
      <br />
      <br />
      <KilosToGallonsForm />
      <br />
      <button onClick={() => window.location.reload()}>Reset</button>
    </div>
  );
}

export default App;
