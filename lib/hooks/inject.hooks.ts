import { Injector } from "../types/inject.types";

export const createInjector = <T>(): Injector<T> => {
  const map: Map<string, T> = new Map();
  return {
    provide(key: string, value: T): void {
      map.set(key, value);
    },
    inject(key: string): T {
      if (!map.has(key)) throw new Error(`Injector: key (${key}) not found`);
      return map.get(key)!;
    },
  };
};

const mainInjector = createInjector<any>();
export const provide = mainInjector.provide;
export const inject = mainInjector.inject;
