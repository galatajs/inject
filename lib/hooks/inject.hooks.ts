import { Injector, InjectorCreator } from "../types/inject.types";

export const createInjector: InjectorCreator = <T>(): Injector<T> => {
  const map: Map<string, T> = new Map();
  return {
    provide(key: string, value: T): void {
      map.set(key, value);
    },
    inject(key: string, quiet: boolean = false): T | null {
      if (!map.has(key)) {
        if (!quiet) {
          throw new Error(`Injector: key (${key}) not found`);
        }
        return null;
      }

      return map.get(key)!;
    },
  };
};

const mainInjector = createInjector<any>();
export const provide = mainInjector.provide;
export const inject = mainInjector.inject;
