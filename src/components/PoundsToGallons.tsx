import { useState, FormEvent } from "react";

const PoundsToGallonsForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      "https://dexterdavenport.pythonanywhere.com/pounds_to_gallons",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          p: parseFloat(inputValue),
        }),
      }
    );
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Pounds:</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="lbs"
        />
        <button type="submit">Convert to Gallons</button>
      </form>
      {result !== null && <p>Result: About {result} Gallons</p>}
    </div>
  );
};

export default PoundsToGallonsForm;
