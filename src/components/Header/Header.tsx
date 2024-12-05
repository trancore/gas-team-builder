import styles from "~/components/Header/Header.module.scss";
import TextForm from "~/components/Form/TextForm";
import Button from "~/components/Button/Button";
import { Dispatch } from "react";

type Props = {
  inputText: string;
  read: () => void;
  setInputText: Dispatch<React.SetStateAction<string>>;
};

export default function Header({ inputText, read, setInputText }: Props) {
  function output() {}

  return (
    <header className={styles.header}>
      <div className={styles.appTitleInput}>
        <p className={styles.appTitle}>Team Builder</p>
        <div className={styles.inputBox}>
          <TextForm inputText={inputText} setInputText={setInputText} />
          <Button onClick={read} text="読み込み" />
        </div>
      </div>
      <Button onClick={output} text="出力する" />
    </header>
  );
}
