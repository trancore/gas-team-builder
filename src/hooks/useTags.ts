import { useState } from "react";
import { GASClient } from "gas-client";
import { DragObjectTag } from "~/types/dragAndDrop";
import * as server from "../../server/code.ts";

const { serverFunctions } = new GASClient<typeof server>();

export default function useTags() {
  const [mainTags, setMainTags] = useState<DragObjectTag[]>([]);
  const [subTags, setSubTags] = useState<DragObjectTag[]>([]);

  function parsValues(values: unknown[][]) {
    const header = values[0] as string[];
    const copyValues = structuredClone(values) as string[][];
    copyValues.shift();
    const dataValues = structuredClone(copyValues);
    const infoDataValues = structuredClone(copyValues);
    infoDataValues.shift();

    return dataValues.map((values, index): DragObjectTag => {
      const infoDataValues = values.filter(
        (_value, indexInfo) => indexInfo > 1,
      );
      return {
        id: String(index + 1),
        name: values[0],
        isMainTag: values[1] === "main",
        info: infoDataValues.map((_infos, indexInfo) => {
          return {
            header: header[indexInfo + 2],
            value: values[indexInfo + 2],
          };
        }),
      };
    });
  }

  async function getTags(spreadSheetId: string) {
    const sheetName = import.meta.env.VITE_SPREAD_SHEET_NAME || "";
    if (sheetName === "") return;

    const { getValues } = serverFunctions;

    const values = await getValues(spreadSheetId, sheetName);
    if (values === undefined) {
      return;
    }
    return parsValues(values);
  }

  return { mainTags, subTags, getTags, setMainTags, setSubTags };
}
