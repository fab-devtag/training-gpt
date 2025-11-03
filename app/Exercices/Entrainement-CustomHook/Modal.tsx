"use client";
import { useToggle } from "./useToggle";

export const Modal = () => {
  const {
    value: isOpen,
    toggle,
    setTrue: open,
    setFalse: close,
  } = useToggle(false);
  return (
    <div>
      <button onClick={open}>Open Modal</button>
      {isOpen && (
        <div>
          <p>Modal content</p>
          <button onClick={close}>Close</button>
          <button onClick={toggle}>Toggle</button>
        </div>
      )}
    </div>
  );
};
