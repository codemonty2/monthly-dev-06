const assert = require("assert");
const index = require("../index");

describe("#halloWorld", function () {
  it("should return message", function () {
    assert.strictEqual(index.halloWorld(), "Hallo world");
  });
});
