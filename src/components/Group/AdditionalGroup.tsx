import styles from "~/components/Group/AdditionalGroup.module.scss";

export default function AdditionalGroup() {
  return (
    <div className={styles.additionalGroup}>
      <table>
        <tbody>
          <tr>
            <td className={styles.add}>+ 追加</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
