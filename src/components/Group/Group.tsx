import styles from "~/components/Group/Group.module.scss";
import HideButton from "~/components/Button/HideButton";

export default function Group() {
  return (
    <div className={styles.group}>
      <table className={styles.groupTop}>
        <tbody>
          <tr>
            <td>サブタグ１</td>
          </tr>
          <tr>
            <td className={styles.add}>
              <HideButton>
                <p>+ 追加</p>
              </HideButton>
            </td>
          </tr>
        </tbody>
      </table>
      <table className={styles.groupMember}>
        <tbody>
          <tr>
            <td>サブタグ１</td>
          </tr>
          <tr>
            <td>サブタグ２</td>
          </tr>
          <tr>
            <td>サブタグ３</td>
          </tr>
          <tr>
            <td>サブタグ４</td>
          </tr>
          <tr>
            <td className={styles.add}>
              <HideButton>
                <p>+ 追加</p>
              </HideButton>
            </td>
          </tr>
        </tbody>
      </table>
      <table className={styles.groupMember}>
        <tbody>
          <tr>
            <td className={styles.add}>
              <HideButton>
                <p>- 削除</p>
              </HideButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
