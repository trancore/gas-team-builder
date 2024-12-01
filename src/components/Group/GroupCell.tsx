import { useDrop } from "react-dnd/dist/hooks/useDrop/useDrop";
import { ITEM_TYPES } from "~/constants/dragAndDrop";
import styles from "~/components/Group/GroupCell.module.scss";
import { DragObjectTag } from "~/types/DragAndDrop";
import { Dispatch, SetStateAction } from "react";

type Props = {
  text: string;
  setTag?: Dispatch<SetStateAction<DragObjectTag[]>>;
};

export function GroupCell({ text, setTag }: Props) {
  const [{ isOver }, drop] = useDrop<
    DragObjectTag,
    void,
    Record<string, boolean>
  >(() => ({
    accept: [ITEM_TYPES.TAG],
    drop: (droppedTag, monitor) => {
      const position = monitor.getSourceClientOffset();
      console.log("🚀 ~ GroupCell ~ position:", position);
      setTag &&
        setTag((prev) => [
          ...prev.filter((mainTag) => mainTag.id !== droppedTag.id),
          {
            position: {
              top: position?.y,
              left: position?.x,
            },
            id: droppedTag.id,
            name: droppedTag.name,
          },
        ]);
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
      {text}
    </td>
  );
}
