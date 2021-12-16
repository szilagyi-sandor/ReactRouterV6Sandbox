export interface PathItem {
  title?: string;
  path: string | undefined;
  children?: Record<string, PathItem>;

  // This is calculated with the processPathObject function.
  _processedInfo?: {
    key: string;
    parentKeys: string[];
  };
}
