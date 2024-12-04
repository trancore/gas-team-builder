import { MouseEventHandler } from "react";
import styles from "~/components/Button/Button.module.scss";

type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ text, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      <p>{text}</p>
    </button>
  );
}
