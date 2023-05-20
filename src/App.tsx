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
    </div>
  );
}

export default App;
