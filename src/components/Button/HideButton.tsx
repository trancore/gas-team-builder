import styles from "~/components/Button/HideButton.module.scss";

type Props = {
  children: JSX.Element;
};

export default function HideButton({ children }: Props) {
  return <button className={styles.hideButton}>{children}</button>;
}
