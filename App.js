const mulika = require("./src/index");
mulika.typeCheck({ type: "number", value: true });
mulika.typeCheck({ type: "boolean", value: true });

mulika.expect(
  "Sum to be 1",
  add(1,9),
  1
);

function add(a, b) {
    return a + b;
}
