import { DndProvider } from "react-dnd/dist/core/DndProvider";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "~/components/Header/Header";
import Content from "~/components/Content/Content";
import useTags from "~/hooks/useTags";
import useForm from "~/hooks/useForm";

export default function App() {
  const { inputText, setInputText } = useForm();
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

  return (
    <>
      <Header
        inputText={inputText}
        read={readSpreadSheet}
        setInputText={setInputText}
      />
      <DndProvider backend={HTML5Backend}>
        <Content
          mainTags={mainTags}
          subTags={subTags}
          setMainTags={setMainTags}
          setSubTags={setSubTags}
        />
      </DndProvider>
    </>
  );
}
