import { createInjector } from "./../lib/hooks/inject.hooks";
describe("Injector tests", () => {
  it("createInjector should return an Injector", () => {
    const injector = createInjector();
    expect(injector).toBeDefined();
    expect(injector.provide).toBeDefined();
    expect(injector.inject).toBeDefined();
  });

  it("Provide a value and inject it", () => {
    const injector = createInjector();
    injector.provide("test", "test");
    expect(injector.inject("test")).toBe("test");
  });

  it("should throw an error when a provide with no value is used", () => {
    const injector = createInjector();
    expect(() => injector.inject("test")).toThrowError(
      "Injector: key (test) not found"
    );
  });
});
