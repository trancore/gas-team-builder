import styles from "~/components/Group/AdditionalGroup.module.scss";
import HideButton from "~/components/Button/HideButton";

export default function AdditionalGroup() {
  return (
    <div className={styles.additionalGroup}>
      <table>
        <tbody>
          <tr>
            <td className={styles.add}>
              <HideButton>
                <p>+ 追加</p>
              </HideButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
