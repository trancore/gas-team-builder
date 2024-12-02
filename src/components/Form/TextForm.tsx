import styles from "~/components/Form/TextForm.module.scss";

export default function TextForm() {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder="スプレッドシートのファイルIDを入れてください"
    ></input>
  );
}
