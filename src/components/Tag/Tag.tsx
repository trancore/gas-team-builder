import { useDrag } from "react-dnd";
import styles from "~/components/Tag/Tag.module.scss";
import { ITEM_TYPES } from "~/constants/dragAndDrop";
import { DragObjectTag } from "~/types/dragAndDrop";

type Props = {
  id: string;
  text: string;
  isMainTag?: boolean;
  info?: {
    header: string;
    value: string;
  }[];
};

export default function Tag({ id, text, isMainTag = false, info }: Props) {
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
        info: info,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [id, text, isMainTag],
  );

  return (
    <div className={styles.tagBox}>
      <div
        className={styles.tag}
        ref={drag}
        style={{ opacity: isDragging ? "0.2" : "1" }}
      >
        {text}
      </div>
      <div className={styles.hoverTagBox}>
        {info?.map((info, index) => (
          <p key={index}>{`${info.header}: ${info.value}`}</p>
        ))}
      </div>
    </div>
  );
}
