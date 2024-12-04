import { useState } from "react";
import { GASClient } from "gas-client";
import { DragObjectTag } from "~/types/dragAndDrop";
import * as server from "../../server/code.ts";

const { serverFunctions } = new GASClient<typeof server>();

export default function useTags() {
  const [tags] = useState<DragObjectTag[]>();

  async function getTags(spreadSheetId: string) {
    const sheetName = import.meta.env.VITE_SPREAD_SHEET_NAME || "";
    if (sheetName === "") return;

    const { getValues } = serverFunctions;

    const values = await getValues(spreadSheetId, sheetName);
    console.log("🚀 ~ getTags ~ values:", values);
  }

  return { tags, getTags };
}
