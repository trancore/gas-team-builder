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
  cellNumber?: string;
  isMain?: boolean;
  info?: {
    header: string;
    value: string;
  }[];
  setMainTags?: Dispatch<SetStateAction<DragObjectTag[]>>;
  setSubTags?: Dispatch<SetStateAction<DragObjectTag[]>>;
  setGroups?: Dispatch<SetStateAction<Group[]>>;
};

export function GroupCell({
  text,
  groupNumber,
  cellNumber,
  isMain = false,
  info,
  setMainTags,
  setSubTags,
  setGroups,
}: Props) {
  const [{ isOver }, drop] = useDrop<
    DragObjectTag,
    void,
    Record<string, boolean>
  >(() => ({
    accept: ITEM_TYPES.TAG,
    drop: (droppedTag) => {
      if (droppedTag.isMainTag !== isMain) return;

      setGroups &&
        setGroups((prev) => {
          const droppedGroup = structuredClone(prev[groupNumber]);

          if (isMain) {
            if (!!droppedGroup.main.name && setMainTags) {
              setMainTags((prev) => [...prev, droppedGroup.main]);
            }
            droppedGroup.main = droppedTag;
          } else {
            if (!!droppedGroup.sub[Number(cellNumber)].name && setSubTags) {
              setSubTags((prev) => [
                ...prev,
                droppedGroup.sub[Number(cellNumber)],
              ]);
            }
            droppedGroup.sub[Number(cellNumber)] = droppedTag;
          }

          const removedGroups = prev.filter(
            (_group, index) => groupNumber !== index,
          );

          return [
            ...structuredClone(removedGroups).splice(0, groupNumber),
            droppedGroup,
            ...structuredClone(removedGroups).splice(groupNumber),
          ];
        });

      isMain
        ? setMainTags &&
          setMainTags((prev) => {
            return prev.filter((tag) => droppedTag.id !== tag.id);
          })
        : setSubTags &&
          setSubTags((prev) => {
            return prev.filter((tag) => droppedTag.id !== tag.id);
          });
    },
    collect: (monitor) => {
      const droppedTag = monitor.getItem();
      return {
        isOver: !!monitor.isOver() && droppedTag.isMainTag === isMain,
      };
    },
  }));

  return (
    <td
      ref={drop}
      className={styles.cell}
      style={{ backgroundColor: isOver ? "#0000ee40" : "" }}
    >
      <div className={styles.tagBox}>
        {text ? (
          <Tag
            id={cellNumber || "0"}
            text={text}
            isMainTag={isMain}
            info={info}
          />
        ) : (
          <div className={styles.tag} />
        )}
      </div>
    </td>
  );
}
