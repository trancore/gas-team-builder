export function doGet() {
  return HtmlService.createHtmlOutputFromFile("hosting/index.html")
    .addMetaTag("viewport", "width=device-width, initial-scale=1")
    .setTitle("Team Builder");
}

function getValues(spreadSheetId: string, sheetName: string) {
  const sheet =
    SpreadsheetApp.openById(spreadSheetId).getSheetByName(sheetName);
  if (sheet === null) {
    return;
  }

  return sheet.getDataRange().getDisplayValues();
}

export { getValues };
