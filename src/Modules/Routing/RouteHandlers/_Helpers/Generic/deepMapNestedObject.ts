import { NestableItem } from "../../_Interfaces/NestableItem";

export const deepMapNestedObject = <T extends NestableItem<T>>(
  object: Record<string, T>,
  mapperFunc: (item: T, keys: string[], indexes: number[]) => void,
  prevKeys: string[] = [],
  prevIndexes: number[] = []
) => {
  Object.keys(object).forEach((key, index) => {
    const item = object[key];
    const currentKeys = [...prevKeys, key];
    const currentIndexes = [...prevIndexes, index];

    mapperFunc(item, currentKeys, currentIndexes);

    if (item.children) {
      deepMapNestedObject(
        item.children,
        mapperFunc,
        currentKeys,
        currentIndexes
      );
    }
  });
};
