import { ChangeEventHandler, useState } from "react";

type InputChangeHandler = ChangeEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>;

export function useTextInput(
  initialState: string
): [string, InputChangeHandler] {
  const [state, setState] = useState(initialState);

  const onChange: InputChangeHandler = (e) => {
    setState(e.target.value);
  };

  return [state, onChange];
}
