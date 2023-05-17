import { useState, FormEvent } from "react";

const NeededPoundsForm = () => {
  const [req, setReq] = useState("");
  const [r, setR] = useState("");
  const [l, setL] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      "https://blooming-scrubland-79678.herokuapp.com/needed_weight",
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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={req}
          onChange={(e) => setReq(e.target.value)}
          placeholder="Pilots Request"
        />
        <input
          type="text"
          value={r}
          onChange={(e) => setR(e.target.value)}
          placeholder="Right"
        />
        <input
          type="text"
          value={l}
          onChange={(e) => setL(e.target.value)}
          placeholder="Left"
        />
        <input
          type="text"
          value={c}
          onChange={(e) => setC(e.target.value)}
          placeholder="Center"
        />
        <button type="submit">Submit</button>
      </form>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default NeededPoundsForm;
