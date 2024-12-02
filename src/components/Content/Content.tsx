import styles from "~/components/Content/Content.module.scss";
import Tag from "~/components/Tag/Tag";
import Group from "~/components/Group/Group";
import AdditionalGroup from "~/components/Group/AdditionalGroup";
import { useState } from "react";
import { DragObjectTag } from "~/types/dragAndDrop";
import { Group as GroupType } from "~/types/group";

export default function Content() {
  const [mainTags] = useState<DragObjectTag[]>([
    { id: "1", name: "メインタグ１" },
    { id: "2", name: "メインタグ２" },
    { id: "3", name: "メインタグ３" },
    { id: "4", name: "メインタグ４" },
    { id: "5", name: "メインタグ５" },
  ]);
  const [subTags] = useState<DragObjectTag[]>([
    { id: "6", name: "サブタグ６" },
    { id: "7", name: "サブタグ７" },
    { id: "8", name: "サブタグ８" },
    { id: "9", name: "サブタグ９" },
    { id: "10", name: "サブタグ１０" },
  ]);
  const [groups, setGroups] = useState<GroupType[]>([
    { main: {}, sub: [{}] },
    { main: {}, sub: [{}] },
    { main: {}, sub: [{}] },
  ]);
  // const { tag, offsetDifference, isDragging } = useDragLayer((monitor) => ({
  //   tag: monitor.getItem() as DragObjectTag,
  //   offsetDifference: monitor.getDifferenceFromInitialOffset(),
  //   isDragging: monitor.isDragging(),
  // }));

  // if (!isDragging || !offsetDifference || !tag) {
  //   return null;
  // }

  return (
    <main className={styles.main}>
      <div className={styles.tagBox}>
        <div className={styles.tagMainBox}>
          {mainTags.map((mainTag) => {
            return (
              <Tag
                key={`main-tag${mainTag.id}`}
                id={mainTag.id || ""}
                text={mainTag.name || ""}
              />
            );
          })}
        </div>
        <div className={styles.tagSubBox}>
          {subTags.map((subTag) => {
            return (
              <Tag
                key={`sub-tag${subTag.id}`}
                id={subTag.id || ""}
                text={subTag.name || ""}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.groupBox}>
        {groups.map((group, index) => {
          return (
            <Group
              key={index}
              componentId={index}
              group={group}
              setGroups={setGroups}
            />
          );
        })}
        <AdditionalGroup setGroups={setGroups} />
      </div>
    </main>
  );
}
