import styles from "~/components/Content/Content.module.scss";
import Tag from "~/components/Tag/Tag";
import Group from "~/components/Group/Group";
import AdditionalGroup from "~/components/Group/AdditionalGroup";
import { useState } from "react";
import { DragObjectTag } from "~/types/dragAndDrop";
import { Group as GroupType } from "~/types/group";
import { useDrop } from "react-dnd/dist/hooks/useDrop/useDrop";
import { ITEM_TYPES } from "~/constants/dragAndDrop";

export default function Content() {
  const [mainTags, setMainTags] = useState<DragObjectTag[]>([
    { id: "1", name: "メインタグ１", isMainTag: true },
    { id: "2", name: "メインタグ２", isMainTag: true },
    { id: "3", name: "メインタグ３", isMainTag: true },
    { id: "4", name: "メインタグ４", isMainTag: true },
    { id: "5", name: "メインタグ５", isMainTag: true },
  ]);
  const [subTags, setSubTags] = useState<DragObjectTag[]>([
    { id: "6", name: "サブタグ６", isMainTag: false },
    { id: "7", name: "サブタグ７", isMainTag: false },
    { id: "8", name: "サブタグ８", isMainTag: false },
    { id: "9", name: "サブタグ９", isMainTag: false },
    { id: "10", name: "サブタグ１０", isMainTag: false },
  ]);
  const [groups, setGroups] = useState<GroupType[]>([
    { main: {}, sub: [{}] },
    { main: {}, sub: [{}] },
    { main: {}, sub: [{}] },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, drop] = useDrop<DragObjectTag>(() => ({
    accept: ITEM_TYPES.TAG,
    drop: (droppedTag) => {
      droppedTag.isMainTag
        ? setMainTags((prev) => {
            return [...prev, droppedTag];
          })
        : setSubTags((prev) => {
            return [...prev, droppedTag];
          });

      setGroups((prev) => {
        return droppedTag.isMainTag
          ? prev.map((group, index) => {
              if (droppedTag.id === group.main.id) {
                return { main: {}, sub: prev[index].sub };
              }
              return prev[index];
            })
          : prev.map((group) => {
              const subTags = group.sub.filter(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                (_tag, index) => droppedTag.id !== String(index),
              );
              return {
                main: group.main,
                sub: subTags.length > 0 ? subTags : [{}],
              };
            });
      });
    },
  }));

  return (
    <main className={styles.main}>
      <div className={styles.tagBox} ref={drop}>
        <div className={styles.tagMainBox}>
          {mainTags.map((mainTag) => {
            return (
              <Tag
                key={`main-tag${mainTag.id}`}
                id={mainTag.id || ""}
                text={mainTag.name || ""}
                isMainTag
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
              setMainTags={setMainTags}
              setSubTags={setSubTags}
              setGroups={setGroups}
            />
          );
        })}
        <AdditionalGroup setGroups={setGroups} />
      </div>
    </main>
  );
}
