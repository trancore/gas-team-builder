import styles from "~/components/Button/Button.module.scss";

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <button className={styles.button}>
      <p>{text}</p>
    </button>
  );
}
