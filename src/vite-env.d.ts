/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SPREAD_SHEET_NAME: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
