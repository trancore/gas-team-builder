import { DndProvider } from "react-dnd/dist/core/DndProvider";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "~/components/Header/Header";
import Content from "~/components/Content/Content";
import useTags from "./hooks/useTags";

export default function App() {
  const { getTags } = useTags();

  return (
    <>
      <Header getTags={getTags} />
      <DndProvider backend={HTML5Backend}>
        <Content />
      </DndProvider>
    </>
  );
}
