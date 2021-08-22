import { useState } from "react";

export const useInputChange = (defaultValues) => {
  const [input, setInput] = useState({ ...defaultValues });

  const handleInputChange = (event) =>
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  return [input, setInput, handleInputChange];
};
