import { useState, FormEvent } from "react";

const KilosToPoundsForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      "https://real-ants-travel.loca.lt/kilos_to_pounds",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          k: parseFloat(inputValue),
        }),
      }
    );
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Kilos:</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="kg"
        />
        <button type="submit">Convert to Pounds</button>
      </form>
      {result !== null && <p>Result: About {result} Pounds</p>}
    </div>
  );
};

export default KilosToPoundsForm;
