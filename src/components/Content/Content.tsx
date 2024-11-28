import styles from "~/components/Content/Content.module.scss";
import Tag from "~/components/Tag/Tag";
import Group from "~/components/Group/Group";
import AdditionalGroup from "~/components/Group/AdditionalGroup";

export default function Content() {
  return (
    <main className={styles.main}>
      <div className={styles.tagBox}>
        <div className={styles.tagMainBox}>
          <Tag text="メインタグ１" />
          <Tag text="メインタグ２" />
          <Tag text="メインタグ３" />
        </div>
        <div className={styles.tagSubBox}>
          <Tag text="サブタグ１" />
          <Tag text="サブタグ２" />
          <Tag text="サブタグ３" />
          <Tag text="サブタグ４" />
          <Tag text="サブタグ５" />
        </div>
      </div>
      <div className={styles.groupBox}>
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <AdditionalGroup />
      </div>
    </main>
  );
}
