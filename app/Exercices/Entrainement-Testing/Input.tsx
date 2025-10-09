// TODO: Interface InputProps avec :
// - label: string
// - value: string
// - onChange: (e: ChangeEvent<HTMLInputElement>) => void
// - placeholder?: string
// - type?: "text" | "email" | "password" | "number"
// - error?: string
// - required?: boolean

import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  error?: string;
  required?: boolean;
}
export const Input = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  type = "text",
}: InputProps) => {
  const id = `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};
