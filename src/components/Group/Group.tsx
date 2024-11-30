import styles from "~/components/Group/Group.module.scss";
import HideButton from "~/components/Button/HideButton";
import { GroupCell } from "~/components/Group/GroupCell";

export default function Group() {
  return (
    <div className={styles.group}>
      <table className={styles.groupTop}>
        <tbody>
          <tr>
            <GroupCell text="サブタブ１" />
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
            <GroupCell text="サブタブ１" />
          </tr>
          <tr>
            <GroupCell text="サブタブ２" />
          </tr>
          <tr>
            <GroupCell text="サブタブ３" />
          </tr>
          <tr>
            <GroupCell text="サブタブ４" />
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
