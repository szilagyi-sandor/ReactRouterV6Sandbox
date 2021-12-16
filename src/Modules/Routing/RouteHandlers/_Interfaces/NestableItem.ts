export interface NestableItem<T> {
  children?: Record<string, T>;
}
