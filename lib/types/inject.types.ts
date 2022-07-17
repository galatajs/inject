export interface Injector<T> {
  provide(key: string, value: T): void;
  inject(key: string, quiet?: boolean): T | null;
}

export type InjectorCreator = <T>() => Injector<T>;
