import styles from "~/components/Header/Header.module.scss";
import TextForm from "~/components/Form/TextForm";
import Button from "~/components/Button/Button";
import useForm from "~/hooks/useForm";
import { DragObjectTag } from "~/types/dragAndDrop";

type Props = {
  getTags: (spreadSheetId: string) => Promise<DragObjectTag[] | undefined>;
};

export default function Header({ getTags }: Props) {
  const { inputText, setInputText } = useForm();

  async function read() {
    const tags = await getTags(inputText);
    console.log("🚀 ~ read ~ tags:", tags);
  }
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
