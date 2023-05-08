describe("mockModule", () => {
  beforeEach(() => {
    jest.resetModules();
    process.env.PUBLIC_URL = "http://localhost:3000";
  });

  test("should return the value of PUBLIC_URL", () => {
    jest.doMock("./mockModule", () => {
      return {
        __esModule: true,
        default: process.env.PUBLIC_URL,
      };
    });

    const myModule = require("./mockModule").default;

    expect(myModule).toEqual("http://localhost:3000");
  });
});

export {};
