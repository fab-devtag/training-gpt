import { ChangeEvent, FormEvent, useState } from "react";

export const useForm = <T extends Record<string, any>>(
  initialValue: T,
  onSubmit: (values: T) => void
) => {
  const [values, setValues] = useState<T>(initialValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setValues(initialValue);
  };
  return {
    values: values,
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    reset: reset,
  };
};

//Je comprends pas trop l'envoi du onsubmit dans les arguments
//Pourquoi exctends Record string, any
