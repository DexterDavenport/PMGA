import { useState, FormEvent } from "react";

const NeededPoundsForm = () => {
  const [req, setReq] = useState("");
  const [r, setR] = useState("");
  const [l, setL] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [gallons, setGallons] = useState<number | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      "https://dexterdavenport.pythonanywhere.com/needed_weight",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          req: parseFloat(req),
          r: parseFloat(r),
          l: parseFloat(l),
          c: parseFloat(c),
        }),
      }
    );
    const data = await response.json();
    setResult(data.result);
    setWeight(data.weight);
    setGallons(data.gallons);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Needed Weight:</label>
        <input
          type="tel"
          value={req}
          onChange={(e) => setReq(e.target.value)}
          placeholder="Pilots Request"
        />
        <input
          type="tel"
          value={r}
          onChange={(e) => setR(e.target.value)}
          placeholder="Left"
        />
        <input
          type="tel"
          value={l}
          onChange={(e) => setL(e.target.value)}
          placeholder="Center"
        />
        <input
          type="tel"
          value={c}
          onChange={(e) => setC(e.target.value)}
          placeholder="Right"
        />
        <button type="submit">Submit</button>
      </form>
      {weight !== null && <p>The total weight onboard is {weight} Pounds</p>}
      {result !== null && <p>The Weight needed is {result} Pounds</p>}
      {gallons !== null && <p>The Weight needed is {gallons} Pounds</p>}
    </div>
  );
};

export default NeededPoundsForm;
