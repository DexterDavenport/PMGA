// First, we import the required dependencies from React.
// useState allows us to create state variables, while FormEvent is a type we use for the form submission event.
import { useState, FormEvent } from "react";

// This is the main component for our form.
const PoundsToGallonsAndKilosToPoundsForm = () => {
  // Here, we're declaring state variables using the useState hook.
  // inputValue holds the value of our form input, while resultGallons and resultPounds hold the results of our conversions.
  const [inputValue, setInputValue] = useState("");
  const [resultGallons, setResultGallons] = useState<number | null>(null);
  const [resultPounds, setResultPounds] = useState<number | null>(null);

  // This is the function that will be called when our form is submitted.
  // It's async because we'll be making asynchronous fetch requests within it.
  const handleSubmit = async (event: FormEvent) => {
    // This prevents the default form submission behavior, which would cause a page refresh.
    event.preventDefault();

    // Here, we make a fetch request to the 'pounds_to_gallons' endpoint of our API.
    // We're sending a POST request with a JSON body that contains the inputValue converted to a float.
    const responseGallons = await fetch(
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
    // Once the request completes, we parse the JSON response.
    const dataGallons = await responseGallons.json();
    // Then, we set resultGallons to be the result from the API response.
    setResultGallons(dataGallons.result);

    // The process is repeated for the 'kilos_to_pounds' endpoint of our API.
    const responsePounds = await fetch(
      "https://dexterdavenport.pythonanywhere.com/kilos_to_pounds",
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
    const dataPounds = await responsePounds.json();
    setResultPounds(dataPounds.result);
  };

  // This is the JSX that will be rendered for our component.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Weight:</label>
        <input
          type="tel"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // When the input changes, we update inputValue.
          placeholder="Enter value"
        />
        <button type="submit">Convert</button>
      </form>
      {/* Here, we conditionally render the results, if they're not null. */}
      {resultGallons !== null && <p>Result: About {resultGallons} Gallons</p>}
      {resultPounds !== null && <p>Result: About {resultPounds} Pounds</p>}
    </div>
  );
};

// Finally, we export our component so it can be used elsewhere.
export default PoundsToGallonsAndKilosToPoundsForm;
