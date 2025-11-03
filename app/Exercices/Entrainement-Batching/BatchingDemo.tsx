"use client";
import { useState } from "react";

export const BatchingDemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Scénario 1 : Multiple updates du même state
  const scenario1 = () => {
    setCount1(count1 + 1);
    setCount1(count1 + 1);
    setCount1(count1 + 1);
    // Quelle sera la valeur finale ? 1
  };

  // Scénario 2 : Functional updates
  const scenario2 = () => {
    setCount2((prev) => prev + 1);
    setCount2((prev) => prev + 1);
    setCount2((prev) => prev + 1);
    // Quelle sera la valeur finale ? 3
  };

  // Scénario 3 : Multiple states
  const scenario3 = () => {
    setCount1((prev) => prev + 1);
    setCount2((prev) => prev + 1);
    setCount3((prev) => prev + 1);
    // Combien de re-renders ? un seul
  };

  // Scénario 4 : Async
  const scenario4 = () => {
    setTimeout(() => {
      setCount1(count1 + 1);
      setCount2(count2 + 1);
    }, 1000);
    // Combien de re-renders après 1 seconde ? un seul
  };

  console.log("Render!");

  return (
    <div>
      <p>Count1: {count1}</p>
      <p>Count2: {count2}</p>
      <p>Count3: {count3}</p>
      <button onClick={scenario1}>Scenario 1</button>
      <button onClick={scenario2}>Scenario 2</button>
      <button onClick={scenario3}>Scenario 3</button>
      <button onClick={scenario4}>Scenario 4</button>
    </div>
  );
};
