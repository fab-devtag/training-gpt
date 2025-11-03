"use client";
import { useForm } from "./useForm";

export const LoginForm = () => {
  const { values, handleChange, handleSubmit, reset } = useForm(
    { email: "", password: "" },
    (values) => {
      console.log("Form submitted:", values);
    }
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </form>
  );
};
