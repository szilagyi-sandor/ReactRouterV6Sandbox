import { PathItem } from "..";

export type PageProps<T = {}> = T & { pathItem: PathItem };
