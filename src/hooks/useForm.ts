import { useState } from "react";

export default function useForm() {
  const [inputText, setInputText] = useState<string>("");

  return { inputText, setInputText };
}
