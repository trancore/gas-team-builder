import styles from "~/components/Group/AdditionalGroup.module.scss";
import HideButton from "~/components/Button/HideButton";
import { ComponentProps, Dispatch, SetStateAction } from "react";
import Group from "~/components/Group/Group";

type GroupType = ComponentProps<typeof Group>["group"];

type Props = {
  setGroups: Dispatch<SetStateAction<GroupType[]>>;
};

export default function AdditionalGroup({ setGroups }: Props) {
  function onClick() {
    setGroups((prev) => [...prev, {}]);
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
