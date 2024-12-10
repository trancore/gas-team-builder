import { DndProvider } from "react-dnd/dist/core/DndProvider";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "~/components/Header/Header";
import Content from "~/components/Content/Content";
import useTags from "~/hooks/useTags";
import useForm from "~/hooks/useForm";
import { useState } from "react";
import { Group as GroupType } from "~/types/group";

export default function App() {
  const { inputText, setInputText } = useForm();
  const [groups, setGroups] = useState<GroupType[]>([{ main: {}, sub: [{}] }]);
  const { mainTags, subTags, setMainTags, setSubTags, getTags } = useTags();

  async function readSpreadSheet() {
    const tags = await getTags(inputText);
    if (tags === undefined) return;

    tags.forEach((tag) => {
      if (tag.isMainTag) {
        return setMainTags((prev) => {
          return [...prev, tag];
        });
      }
      return setSubTags((prev) => {
        return [...prev, tag];
      });
    });
  }

  function outputGroups() {
    if (!navigator.clipboard) {
      alert("sorry. we can't copy in clipboard.");
      return;
    }

    navigator.clipboard.writeText(JSON.stringify(groups)).then(
      () => {
        alert("we success in copying at clipboard.");
      },
      () => {
        alert("sorry. we can't copy in clipboard.");
      },
    );
  }

  return (
    <>
      <Header
        inputText={inputText}
        read={readSpreadSheet}
        output={outputGroups}
        setInputText={setInputText}
      />
      <DndProvider backend={HTML5Backend}>
        <Content
          mainTags={mainTags}
          subTags={subTags}
          groups={groups}
          setMainTags={setMainTags}
          setSubTags={setSubTags}
          setGroups={setGroups}
        />
      </DndProvider>
    </>
  );
}
