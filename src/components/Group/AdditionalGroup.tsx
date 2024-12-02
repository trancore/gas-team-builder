import styles from "~/components/Group/AdditionalGroup.module.scss";
import HideButton from "~/components/Button/HideButton";
import { Dispatch, SetStateAction } from "react";
import { Group } from "~/types/group";

type Props = {
  setGroups: Dispatch<SetStateAction<Group[]>>;
};

export default function AdditionalGroup({ setGroups }: Props) {
  function onClick() {
    setGroups((prev) => [
      ...prev,
      {
        main: {},
        sub: [{}],
      },
    ]);
  }

  return (
    <div className={styles.additionalGroup}>
      <table>
        <tbody>
          <tr>
            <td className={styles.add}>
              <HideButton onClick={onClick}>
                <p>+ 追加</p>
              </HideButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
