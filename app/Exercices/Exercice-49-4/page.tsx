"use client";

import { useReducer } from "react";

type State = { counter: number };
type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "bonus"; payload: number }
  | { type: "reset" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    case "bonus":
      return {
        counter: state.counter + action.payload,
      };
    case "reset":
      return { counter: 0 };
    default:
      return { counter: state.counter };
  }
};

const initialState: State = { counter: 0 };

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Evaluation - Compteur avancé avec useReducer</h1>
      <p>{state.counter}</p>
      <div className="space-x-2">
        <button onClick={() => dispatch({ type: "increment" })}>+1</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
        <button onClick={() => dispatch({ type: "bonus", payload: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}
