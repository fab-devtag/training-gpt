"use client";

import { FormEvent, useReducer } from "react";

type Action =
  | { type: "submit" }
  | { type: "updateFields"; value: string; field: keyof IState["fields"] }
  | { type: "success" }
  | { type: "error" };

interface IState {
  status: string;
  fields: { name: string; email: string; message: string };
}

export default function Home() {
  const initialState: IState = {
    status: "",
    fields: { name: "", email: "", message: "" },
  };

  const reducer = (state: IState, action: Action) => {
    switch (action.type) {
      case "submit":
        return { ...state, status: "loading" };
      case "success":
        return {
          status: "success",
          fields: { name: "", email: "", message: "" },
        };
      case "updateFields":
        return {
          ...state,
          fields: {
            ...state.fields,
            [action.field]: action.value,
          },
        };
      case "error":
        return {
          ...state,
          status: "error",
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: "submit" });
    setTimeout(() => {
      const percantageError = Math.floor(Math.random() * 11);
      if (percantageError > 9) {
        dispatch({ type: "error" });
      } else {
        dispatch({ type: "success" });
      }
    }, 1000);
  };

  return (
    <div className="flex items-center flex-col space-y-5">
      <div>
        <h1>useReducer à nouveau</h1>
      </div>
      <form className="bg-blue-500 p-5" onSubmit={(e) => submitForm(e)}>
        <div>
          <label>Nom</label>
          <input
            className="bg-white text-black w-full"
            value={state.fields.name}
            onChange={(e) =>
              dispatch({
                type: "updateFields",
                value: e.target.value,
                field: "name",
              })
            }
          />
        </div>
        <div>
          <label>Email</label>
          <input
            className="bg-white text-black w-full"
            value={state.fields.email}
            onChange={(e) =>
              dispatch({
                type: "updateFields",
                value: e.target.value,
                field: "email",
              })
            }
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            className="bg-white text-black w-full"
            value={state.fields.message}
            onChange={(e) =>
              dispatch({
                type: "updateFields",
                value: e.target.value,
                field: "message",
              })
            }
          />
        </div>
        {state.status === "success" && <h1>Message envoyé !</h1>}
        {state.status === "error" && <h1>Erreur dans l'envoi du message.</h1>}
        <button
          className="bg-orange-500 w-full mt-3"
          disabled={state.status === "loading"}
        >
          {state.status === "loading" ? "Loading" : "Envoyer"}
        </button>
      </form>
    </div>
  );
}
