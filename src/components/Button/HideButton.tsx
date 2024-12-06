import { MouseEventHandler } from "react";
import styles from "~/components/Button/HideButton.module.scss";

type Props = {
  children: JSX.Element;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function HideButton({ children, onClick }: Props) {
  return (
    <button className={styles.hideButton} onClick={onClick}>
      {children}
    </button>
  );
}
