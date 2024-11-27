import styles from "~/components/Header/Header.module.scss";
import TextForm from "~/components/Form/TextForm.tsx";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.appTitleInput}>
        <p className={styles.appTitle}>Team Builder</p>
        <div className={styles.inputBox}>
          <TextForm />
          <button>
            <p>読み込む</p>
          </button>
        </div>
      </div>
      <button>
        <p>出力する</p>
      </button>
    </header>
  );
}
