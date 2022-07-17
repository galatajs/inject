export interface Injector<T> {
  provide(key: string, value: T): void;
  inject(key: string): T | null;
}

export type InjectorCreator = <T>(quiet?: boolean) => Injector<T>;
