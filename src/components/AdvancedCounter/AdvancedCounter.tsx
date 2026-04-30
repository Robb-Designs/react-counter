import { useState, useEffect } from "react";

export default function AdvancedCounter() {
  const [count, setCount] = useState(0); //Set initial default state to 0
  const [step, setStep] = useState(1);

  // Adding handler: takes prev value react has and will add 1
  function handleAdd() {
    setCount((prev) => prev + step); //use what React knows the value is, better than setCount(count + 1)
  }

  // Subtracting handler: takes prev value react has and will subtract 1
  function handleSub() {
    setCount((prev) => prev - step);
  }

  // input handler: Takes the input value, turns the value into a number, and sets the step state to the input value given
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const stepValue = e.target.value;
    setStep(stepValue === "" ? 1 : Number(e.target.value)); //think of this as => 'Is steepValue strictly an empty string? If so we will place 1 there, or else we'll put the input value thats been turned into a number'
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
        value={step}
        type="text"
        placeholder="e.g 5"
        id="step-input"
        onChange={handleInput}
      />
    </div>
  );
}
