"use client";

import { ComponentProps, forwardRef, useRef } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const renderCount = useRef(0);
  /* renderCount.current += 1; */
  return (
    <div>
      <h1>useRef et forwardRef</h1>
      <form>
        <label>Nom (render #{renderCount.current})</label>
        <input ref={inputRef} />
        <button
          onClick={(e) => {
            e.preventDefault();
            inputRef.current?.focus();
          }}
        >
          Focus nom
        </button>
        <TextInput ref={secondInputRef} />
        <button
          onClick={(e) => {
            e.preventDefault();
            secondInputRef.current?.focus();
          }}
        >
          Deuxieme
        </button>
      </form>
    </div>
  );
}

const TextInput = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  (props, ref) => <input ref={ref} {...props} />
);
