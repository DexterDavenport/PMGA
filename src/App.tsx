import KilosToGallonsForm from "./components/KilosToPounds";
import NeededPoundsForm from "./components/NeededPounds";
import PoundsToGallonsAndKilosToPoundsForm from "./components/PoundsAndKilos";
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
      <br />
      <PoundsToGallonsAndKilosToPoundsForm />
      <button onClick={() => window.location.reload()}>Reset</button>
    </div>
  );
}

export default App;
