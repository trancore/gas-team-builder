import { DragObjectTag } from "~/types/dragAndDrop";

export type Group = {
  main: DragObjectTag;
  sub: DragObjectTag[];
};
