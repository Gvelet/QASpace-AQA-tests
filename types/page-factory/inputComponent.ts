import { LocatorProps } from "@/types/page-factory/component";

export type FillProps = { validateValue?: boolean } & LocatorProps;
export type FilesSet = string | string[];
export type TypeOptions = {delay?: number, validateValue?: boolean;}    