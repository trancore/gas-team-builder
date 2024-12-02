﻿import styles from "~/components/Group/Group.module.scss";
import HideButton from "~/components/Button/HideButton";
import { GroupCell } from "~/components/Group/GroupCell";
import { Dispatch, SetStateAction } from "react";
import { Group as GroupType } from "~/types/group";

type Props = {
  componentId: number;
  group: GroupType;
  setGroups: Dispatch<SetStateAction<GroupType[]>>;
};

export default function Group({ componentId, group, setGroups }: Props) {
  function addSub() {
    group.sub.push({});
    const newGroup = group;
    setGroups((prev) =>
      prev.map((group, index) => {
        if (componentId === index) {
          return newGroup;
        }
        return group;
      }),
    );
  }
  function removeGruops() {
    setGroups((prev) => [...prev.filter((_, index) => index !== componentId)]);
  }

  return (
    <div className={styles.group}>
      <table className={styles.groupTop}>
        <tbody>
          <tr>
            <GroupCell
              text={group.main?.name || ""}
              groupNumber={componentId}
              isMain
              setGroups={setGroups}
            />
          </tr>
        </tbody>
      </table>
      <table className={styles.groupMember}>
        <tbody>
          {group.sub?.map((tag, index) => {
            return (
              <tr key={index}>
                <GroupCell
                  text={tag.name || ""}
                  groupNumber={componentId}
                  cellNumber={index}
                  setGroups={setGroups}
                />
              </tr>
            );
          })}
          <tr>
            <td className={styles.add}>
              <HideButton onClick={addSub}>
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
              <HideButton onClick={removeGruops}>
                <p>- 削除</p>
              </HideButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
