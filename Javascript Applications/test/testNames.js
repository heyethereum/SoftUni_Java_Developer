function removeJNames(names) {
  return names.filter((name) => !name.toLowerCase().startsWith("j"));
}

let assert = require("chai").assert;

describe("removeJNames", function () {
  it("should be case insensitive", function () {
    let names = ["James", "Kate", "john"];
    let actual = removeJNames(names);
    assert(actual.length, 1);
    assert.isTrue(actual.includes("Kate"));
    assert.isFalse(actual.includes("James"));
    assert.isFalse(actual.includes("john"));
  });

  it("should remove only the names with starting letter J/j", function () {
    let names = ["James", "Kate", "john", "Benji"];
    let actual = removeJNames(names);
    console.log(actual);
    assert(actual.length, 2);
    assert.isTrue(actual.includes("Benji"));
  });
});
