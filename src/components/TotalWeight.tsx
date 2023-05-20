import { useState, FormEvent } from "react";

const TotalPoundsForm = () => {
  const [tr, setR] = useState("");
  const [tl, setL] = useState("");
  const [tc, setC] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      "https://eight-bees-act.loca.lt/total_weight",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tr: parseFloat(tr),
          tl: parseFloat(tl),
          tc: parseFloat(tc),
        }),
      }
    );
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Final Weight:</label>
        <input
          type="tel"
          value={tr}
          onChange={(e) => setR(e.target.value)}
          placeholder="Left"
        />
        <input
          type="tel"
          value={tl}
          onChange={(e) => setL(e.target.value)}
          placeholder="Center"
        />
        <input
          type="tel"
          value={tc}
          onChange={(e) => setC(e.target.value)}
          placeholder="Right"
        />
        <button type="submit">Submit</button>
      </form>
      {result !== null && <p>Result: {result} Pounds Needed</p>}
    </div>
  );
};

export default TotalPoundsForm;
