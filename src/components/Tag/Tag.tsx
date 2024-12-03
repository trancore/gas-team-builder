import { useDrag } from "react-dnd";
import styles from "~/components/Tag/Tag.module.scss";
import { ITEM_TYPES } from "~/constants/dragAndDrop";
import { DragObjectTag } from "~/types/dragAndDrop";

type Props = {
  id: string;
  text: string;
  isMainTag?: boolean;
};

export default function Tag({ id, text, isMainTag = false }: Props) {
  const [{ isDragging }, drag] = useDrag<
    DragObjectTag,
    Record<string, never>,
    { isDragging: boolean }
  >(
    () => ({
      type: ITEM_TYPES.TAG,
      item: {
        id,
        name: text,
        isMainTag,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [id, text, isMainTag],
  );

  return (
    <div
      className={styles.tag}
      ref={drag}
      style={{ opacity: isDragging ? "0.2" : "1" }}
    >
      {text}
    </div>
  );
}
