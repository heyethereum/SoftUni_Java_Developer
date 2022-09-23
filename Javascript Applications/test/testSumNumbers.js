let expect = require("chai").expect;
function sum(arr) {
  let sum = 0;
  for (let num of arr) sum += Number(num);
  return sum;
}

describe("sum", function () {
  it("test with string that returns NaN", function () {
    let actual = sum("abc");
    expect(actual).to.be.NaN;
  });
  it("test array of strings returns number", () => {
    let actual = sum(["1", "2"]);
    expect(actual).to.be.equal(3);
  });
  it("expect sum([1,2,3]) as nums to be 6", () => {
    let expected = 6;
    let actual = sum([1, 2, 3]);
    expect(actual).to.be.equal(expected);
  });
});
