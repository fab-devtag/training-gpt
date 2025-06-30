"use client";

import { useReducer, useState } from "react";

interface IState {
  step: number;
  fields: {
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
  };
}

type Action =
  | { type: "nextStep" }
  | { type: "updateFields"; field: keyof IState["fields"]; value: string };

export default function Home() {
  const initialState = {
    step: 1,
    fields: { lastName: "", firstName: "", email: "", phone: "" },
  };
  const reducer = (state: IState, action: Action) => {
    console.log(state, action);
    switch (action.type) {
      case "nextStep":
        return {
          ...state,
          step: state.step + 1,
        };
      case "updateFields":
        return {
          ...state,
          fields: {
            ...state.fields,
            [action.field]: action.value,
          },
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center">
      <h1>Formulaire - useReducer</h1>

      <form className="flex justify-center items-center flex-col w-1/3 mt-15 border-white border-2 rounded-lg px-5 py-10">
        <p className="mb-5 text-xl italic">Step 1</p>
        <div className="w-1/3">
          <div>
            <label className="text-gray-400 text-xs">Nom</label>
            <input
              type="text"
              required
              className="w-full bg-white text-black"
              onChange={(e) =>
                dispatch({
                  type: "updateFields",
                  field: "lastName",
                  value: e.target.value,
                })
              }
              value={state.fields.lastName}
            />
          </div>
          <div>
            <label className="text-gray-400 text-xs">Prénom</label>
            <input
              type="text"
              required
              className="w-full bg-white text-black"
              onChange={(e) =>
                dispatch({
                  type: "updateFields",
                  field: "firstName",
                  value: e.target.value,
                })
              }
              value={state.fields.firstName}
            />
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "nextStep" });
          }}
          className="bg-orange-300 mt-4 w-1/3 p-2 rounded-lg text-orange-950 cursor-pointer"
        >
          Etape suivante
        </button>
      </form>
    </div>
  );
}
