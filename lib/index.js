"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mulika = {
    // Type check...
    typeCheck(item) {
        try {
            let result, item_col;
            const type = Object.prototype.toString.call(item.value).slice(8, -1);
            item_col = `${item.type.toLowerCase()}`.yellow;
            if (type.toLowerCase() === item.type.toLowerCase()) {
                result = ` ✔️  Passed type check of typeof ${item_col}`.green;
                console.log(result);
            }
            else {
                const err = new Error(` ❌ Failed Type Check`);
                const stack = err.stack.split('\n');
                const line_path = stack[2].split('/');
                result = ` ❌ Expected typeof ${item_col}, not ${type.toLowerCase()}
${line_path}`.red;
                console.log(result);
            }
        }
        catch (error) {
            console.log(error);
        }
    },
    // Other tests...
    expect(message, value, assertion) {
        let value_col;
        try {
            if (value === assertion) {
                console.log(` ✔️  Expected ${message}`.green);
            }
            else {
                const err = new Error(`❌ Test Failed`);
                const stack = err.stack.split('\n');
                const line_path = stack[2].split('/');
                value_col = `${value}`.yellow;
                console.log(` ❌ Expected ${message} not ${value_col}
  ${line_path}`.red);
            }
        }
        catch (error) {
            console.log(error);
        }
    },
};
exports.default = mulika;
