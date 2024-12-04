import { ChangeEvent, Dispatch } from "react";
import styles from "~/components/Form/TextForm.module.scss";

type Props = {
  inputText: string;
  setInputText: Dispatch<React.SetStateAction<string>>;
};

export default function TextForm({ inputText, setInputText }: Props) {
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputText(value);
  }

  return (
    <input
      type="text"
      placeholder="スプレッドシートのファイルIDを入れてください"
      className={styles.input}
      value={inputText}
      onChange={onChange}
    />
  );
}
