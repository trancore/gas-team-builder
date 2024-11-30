import { useDrop } from "react-dnd/dist/hooks/useDrop/useDrop";
import { ITEM_TYPES } from "~/constants/dragAndDrop";
import styles from "~/components/Group/GroupCell.module.scss";
import { DragObjectTag } from "~/types/DragAndDrop";

type Props = {
  text: string;
};

export function GroupCell({ text }: Props) {
  const [{ isOver }, drop] = useDrop<
    DragObjectTag,
    void,
    Record<string, boolean>
  >(() => ({
    accept: [ITEM_TYPES.TAG],
    drop: () => {},
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
