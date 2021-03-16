import { expect } from "chai";
import capitalize from "../src/capitalize";

describe("Simple Capitalization Test", () => {
  it("should return 'Test' if input is 'test'", () => {
    expect(capitalize("test")).to.equal("Test");
  });
  it("should be idempotent", () => {
    expect(capitalize("Test")).to.equal("Test");
  });
  it("should throw an error if not string", () => {
    //@ts-expect-error
    expect(() => capitalize(10)).to.throw(Error, "Input is not a string");
  });
  it("should return empty if string is empty", () => {
    expect(capitalize("")).to.equal("");
  });
});
