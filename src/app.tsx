import { DndProvider } from "react-dnd/dist/core/DndProvider";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "~/components/Header/Header";
import Content from "~/components/Content/Content";

export default function App() {
  return (
    <>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Content />
      </DndProvider>
    </>
  );
}
