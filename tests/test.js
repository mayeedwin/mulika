const mulika = require("../src/index");

mulika.typeCheck({ type: "number", value: true });
mulika.typeCheck({ type: "boolean", value: true });

mulika.expect(
  "Sum to be 10",
  add(1, 9),
  10
);

function add(a, b) {
    return a + b;
}
