import { useState, useEffect } from "react";

export default function AdvancedCounter() {
  const [count, setCount] = useState(0); //Set initial default state to 0
  const [step, setStep] = useState(1);

  // Adding
  function handleAdd() {
    setCount((prev) => prev + step); //use what React knows the value is, better than setCount(count + 1)
  }

  // Subtracting
  function handleSub() {
    setCount((prev) => prev - step);
  }

  useEffect(() => {
    console.log('Rendered Count from useEffect:', count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={handleAdd}>+ Add</button>
        <button onClick={handleSub}>- Sub</button>
      </div>
    </div>
  );
}
