import { useState, useEffect } from "react";

export default function AdvancedCounter() {
  const [count, setCount] = useState(0); //Set initial default state to 0
  const [step, setStep] = useState(1); // Set step value default state to 0
  const [inputValue, setInputValue] = useState("1"); // Set input value default state

  // Adding handler: takes prev value react has and will add by what the input value is
  function handleAdd() {
    setCount((prev) => prev + step); //use what React knows the value is, better than setCount(count + 1)

    //guard
    if (step === 0) return;
  }

  // Subtracting handler: takes prev value react has and will subtract by what the input value is
  function handleSub() {
    setCount((prev) => prev - step);

    //guard
    if (step === 0) return;
  }

  // input handler: Takes the input value, turns the value into a number, and sets the step state to the input value given
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const stepValue = e.target.value;

    setInputValue(stepValue);

    if (stepValue !== "") {
      setStep(Number(stepValue));

    }
  }

  useEffect(() => {
    console.log("Rendered Count from useEffect:", count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={handleAdd}>+ Add</button>
        <button onClick={handleSub}>- Sub</button>
      </div>

      <label htmlFor="step-input">Step Count: </label>
      <input
        value={inputValue}
        type="number"
        placeholder="e.g 5"
        id="step-input"
        onChange={handleInput}
      />
    </div>
  );
}
