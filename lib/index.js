"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mulika = {
    // Type check...
    typeCheck(item) {
        try {
            let result;
            let itemCol;
            const type = Object.prototype.toString.call(item.value).slice(8, -1);
            itemCol = `${item.type.toLowerCase()}`.yellow;
            if (type.toLowerCase() === item.type.toLowerCase()) {
                result = ` ✔️  Passed type check of typeof ${itemCol}`.green;
                console.log(result);
            }
            else {
                const err = new Error(` ❌ Failed Type Check`);
                const stack = err.stack.split('\n');
                const linePath = stack[2].split('/');
                result = ` ❌ Expected typeof ${itemCol}, not ${type.toLowerCase()}
${linePath}`.red;
                console.log(result);
            }
        }
        catch (error) {
            console.log(error);
        }
    },
    // Other tests...
    expect(message, value, assertion) {
        let valueCol;
        try {
            if (value === assertion) {
                console.log(` ✔️  Expected ${message}`.green);
            }
            else {
                const err = new Error(`❌ Test Failed`);
                const stack = err.stack.split('\n');
                const linePath = stack[2].split('/');
                valueCol = `${value}`.yellow;
                console.log(` ❌ Expected ${message} not ${valueCol}
  ${linePath}`.red);
            }
        }
        catch (error) {
            console.log(error);
        }
    },
};
exports.default = mulika;
