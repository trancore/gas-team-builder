import { useDrag } from "react-dnd";
import styles from "~/components/Tag/Tag.module.scss";
import { ITEM_TYPES } from "~/constants/dragAndDrop";
import { DragObjectTag } from "~/types/dragAndDrop";

type Props = {
  id: string;
  text: string;
};

export default function Tag({ id, text }: Props) {
  const [{ isDragging }, drag] = useDrag<
    DragObjectTag,
    Record<string, never>,
    { isDragging: boolean }
  >(
    () => ({
      type: ITEM_TYPES.TAG,
      tag: {
        id,
        name: text,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [id, text],
  );

  // useEffect(() => {
  //   preview(getEmptyImage());
  // }, [preview]);

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
