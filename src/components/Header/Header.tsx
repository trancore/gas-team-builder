import styles from "~/components/Header/Header.module.scss";
import TextForm from "~/components/Form/TextForm.tsx";
import Button from "~/components/Button/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.appTitleInput}>
        <p className={styles.appTitle}>Team Builder</p>
        <div className={styles.inputBox}>
          <TextForm />
          <Button text="読み込み" />
        </div>
      </div>
      <Button text="出力する" />
    </header>
  );
}
