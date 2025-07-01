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
  success: boolean;
  error: string;
}

type Action =
  | { type: "nextStep" }
  | { type: "previousStep" }
  | { type: "updateFields"; field: keyof IState["fields"]; value: string }
  | { type: "confirm" };

export default function Home() {
  const initialState: IState = {
    step: 1,
    fields: { lastName: "", firstName: "", email: "", phone: "" },
    success: false,
    error: "",
  };
  const reducer = (state: IState, action: Action) => {
    switch (action.type) {
      case "previousStep":
        return {
          ...state,
          step: state.step - 1,
        };
      case "nextStep":
        if (state.step === 1) {
          const { firstName, lastName } = state.fields;
          if (!firstName || !lastName)
            return {
              ...state,
              error: "Les champs sont vides",
            };
        }
        if (state.step === 2) {
          const { email, phone } = state.fields;
          if (!email || !phone) {
            return {
              ...state,
              error: "Les champs sont vides",
            };
          }
        }
        return {
          ...state,
          step: state.step + 1,
          error: "",
        };
      case "updateFields":
        return {
          ...state,
          fields: {
            ...state.fields,
            [action.field]: action.value,
          },
        };
      case "confirm":
        return { ...state, success: true };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProgressWidth = () => {
    switch (state.step) {
      case 1:
        return "w-1/3";
      case 2:
        return "w-2/3";
      case 3:
        return "w-full";
      default:
        return "w-0";
    }
  };

  return state.success ? (
    <h1>Youpi</h1>
  ) : (
    <div className="flex flex-col items-center">
      <h1>Formulaire - useReducer</h1>
      <form className="flex justify-center items-center flex-col w-1/3 mt-15 border-white border-2 rounded-lg px-5 py-10">
        {!state.success && state.step > 1 && (
          <button
            className="self-start bg-gray-400 p-1 rounded-lg text-gray-800 text-xs cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "previousStep" });
            }}
          >
            Retour
          </button>
        )}
        <p className="mb-5 text-xl italic">Step {state.step} / 3</p>
        <div className="bg-gray-500 w-full h-2">
          <div
            className={`${getProgressWidth()} bg-green-500 h-2 transition-all duration-300`}
          />
        </div>
        {state.step === 1 && (
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
        )}
        {state.step === 2 && (
          <div className="w-1/3">
            <div>
              <label className="text-gray-400 text-xs">Email</label>
              <input
                type="email"
                required
                className="w-full bg-white text-black"
                onChange={(e) =>
                  dispatch({
                    type: "updateFields",
                    field: "email",
                    value: e.target.value,
                  })
                }
                value={state.fields.email}
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs">Téléphone</label>
              <input
                type="tel"
                required
                className="w-full bg-white text-black"
                onChange={(e) =>
                  dispatch({
                    type: "updateFields",
                    field: "phone",
                    value: e.target.value,
                  })
                }
                value={state.fields.phone}
              />
            </div>
          </div>
        )}
        {state.step === 3 && (
          <div className="w-1/3">
            <div>
              <label className="text-gray-400 text-xs">Nom</label>
              <p>{state.fields.lastName}</p>
            </div>
            <div>
              <label className="text-gray-400 text-xs">Prénom</label>
              <p>{state.fields.firstName}</p>
            </div>
            <div>
              <label className="text-gray-400 text-xs">Email</label>
              <p>{state.fields.email}</p>
            </div>
            <div>
              <label className="text-gray-400 text-xs">Téléphone</label>
              <p>{state.fields.phone}</p>
            </div>
          </div>
        )}
        {state.error && <p className="text-red-400">{state.error}</p>}
        {state.step === 1 || state.step === 2 ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "nextStep" });
            }}
            className="bg-orange-300 mt-4 w-1/3 p-2 rounded-lg text-orange-950 cursor-pointer"
          >
            Etape suivante
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "confirm" });
            }}
            className="bg-orange-300 mt-4 w-1/3 p-2 rounded-lg text-orange-950 cursor-pointer"
          >
            Confirmer
          </button>
        )}
      </form>
    </div>
  );
}
