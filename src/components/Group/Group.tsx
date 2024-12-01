import styles from "~/components/Group/Group.module.scss";
import HideButton from "~/components/Button/HideButton";
import { GroupCell } from "~/components/Group/GroupCell";
import { Dispatch, SetStateAction } from "react";
import { DragObjectTag } from "~/types/DragAndDrop";

type SetTag = Dispatch<SetStateAction<DragObjectTag[]>>;
type Group = {
  main: DragObjectTag;
  sub: DragObjectTag[];
};

type Props = {
  componentId: number;
  group: Group;
  setMainTag: SetTag;
  setSubTag: SetTag;
  setGroups: Dispatch<SetStateAction<Group[]>>;
};

export default function Group({
  componentId,
  group,
  setMainTag,
  setSubTag,
  setGroups,
}: Props) {
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
  function removeTeams() {
    setGroups((prev) => [...prev.filter((_, index) => index !== componentId)]);
  }

  return (
    <div className={styles.group}>
      <table className={styles.groupTop}>
        <tbody>
          <tr>
            <GroupCell text={group.main?.name || ""} setTag={setMainTag} />
          </tr>
        </tbody>
      </table>
      <table className={styles.groupMember}>
        <tbody>
          {group.sub?.map((tag, index) => {
            return (
              <tr key={index}>
                <GroupCell text={tag.name || ""} setTag={setSubTag} />
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
              <HideButton onClick={removeTeams}>
                <p>- 削除</p>
              </HideButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
