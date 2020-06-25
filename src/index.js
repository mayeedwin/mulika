"use strict";
const colors = require("colors");

const mulika = {
  // Type check...
  typeCheck(item) {
    let result, item_col;
    const type = Object.prototype.toString.call(item.value).slice(8, -1);
    item_col = `${item.type.toLowerCase()}`.yellow;
    if (type.toLowerCase() === item.type.toLowerCase()) {
      result = `✔️  Passed type check of typeof ${item_col}`.green;
      console.log(result);
    } else {
      const err = new Error(`❌ Failed Type Check`);
      const stack = err.stack.split("\n");
      const line_path = stack[2].split("/");
      result = `❌ Expected typeof ${item_col}, not ${type.toLowerCase()}
${line_path}`.red;
      console.log(result);
    }
  },
  // Testing...
  expect(message, callback, check) {
    let callback_col;
    if (callback === check) {
      console.log(`✔️  Expected ${message}`.green);
    } else {
      const err = new Error(`❌  Test Failed`);
      const stack = err.stack.split("\n");
      const line_path = stack[2].split("/");
      callback_col = `${callback}`.yellow;
      console.log(`❌  Expected ${message} not ${callback_col}
${line_path}`.red);
    }
  },
};

module.exports = mulika;
