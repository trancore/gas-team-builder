import { useDrop } from "react-dnd/dist/hooks/useDrop/useDrop";
import { ITEM_TYPES } from "~/constants/dragAndDrop";
import styles from "~/components/Group/GroupCell.module.scss";
import { DragObjectTag } from "~/types/dragAndDrop";
import { Dispatch, SetStateAction } from "react";
import { Group } from "~/types/group";
import Tag from "~/components/Tag/Tag";

type Props = {
  text: string;
  groupNumber: number;
  cellNumber?: number;
  isMain?: boolean;
  setGroups?: Dispatch<SetStateAction<Group[]>>;
};

export function GroupCell({
  text,
  groupNumber,
  cellNumber = 0,
  isMain,
  setGroups,
}: Props) {
  const [{ isOver }, drop] = useDrop<
    DragObjectTag,
    void,
    Record<string, boolean>
  >(() => ({
    accept: ITEM_TYPES.TAG,
    drop: (_droppedTag, monitor) => {
      console.log("🚀 ~ _droppedTag:", _droppedTag);
      const position = monitor.getSourceClientOffset();
      console.log("🚀 ~ GroupCell ~ position:", position);
      setGroups &&
        setGroups((prev) => {
          const droppedGroup = structuredClone(prev[groupNumber]);

          // TODO デバッグ用 削除すること
          const test = { name: "test" };
          // isMain
          //   ? (droppedGroup.main = droppedTag)
          //   : (droppedGroup.sub[cellNumber] = droppedTag);
          isMain
            ? (droppedGroup.main = test)
            : (droppedGroup.sub[cellNumber] = test);

          const removedGroups = prev.filter(
            (_group, index) => groupNumber !== index,
          );

          return [
            ...structuredClone(removedGroups).splice(0, groupNumber),
            droppedGroup,
            ...structuredClone(removedGroups).splice(groupNumber),
          ];
        });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <td
      ref={drop}
      className={styles.cell}
      style={{ backgroundColor: isOver ? "#0000ee40" : "" }}
    >
      <div className={styles.tagBox}>
        {text ? <Tag id={""} text={text} /> : <div className={styles.tag} />}
      </div>
    </td>
  );
}
