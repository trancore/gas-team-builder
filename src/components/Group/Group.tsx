import styles from "~/components/Group/Group.module.scss";
import HideButton from "~/components/Button/HideButton";
import { GroupCell } from "~/components/Group/GroupCell";
import { Dispatch, SetStateAction } from "react";
import { Group as GroupType } from "~/types/group";
import { DragObjectTag } from "~/types/dragAndDrop";

type Props = {
  componentId: number;
  group: GroupType;
  setMainTags: Dispatch<SetStateAction<DragObjectTag[]>>;
  setSubTags: Dispatch<SetStateAction<DragObjectTag[]>>;
  setGroups: Dispatch<SetStateAction<GroupType[]>>;
};

export default function Group({
  componentId,
  group,
  setMainTags,
  setSubTags,
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
  function removeGruops() {
    setMainTags((prev) => {
      return [...prev, group.main];
    });
    setSubTags((prev) => {
      return [...prev, ...group.sub];
    });
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
              cellNumber={group.main.id}
              isMain
              info={group.main.info}
              setMainTags={setMainTags}
              setSubTags={setSubTags}
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
                  cellNumber={String(index)}
                  info={tag.info}
                  setMainTags={setMainTags}
                  setSubTags={setSubTags}
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
