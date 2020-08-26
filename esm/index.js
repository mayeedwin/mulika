var mulika = {
    // Type check...
    typeCheck: function (item) {
        try {
            var result = void 0, item_col = void 0;
            var type = Object.prototype.toString.call(item.value).slice(8, -1);
            item_col = ("" + item.type.toLowerCase()).yellow;
            if (type.toLowerCase() === item.type.toLowerCase()) {
                result = (" \u2714\uFE0F  Passed type check of typeof " + item_col).green;
                console.log(result);
            }
            else {
                var err_1 = new Error(" \u274C Failed Type Check");
                var stack = err_1.stack.split('\n');
                var line_path = stack[2].split('/');
                result = (" \u274C Expected typeof " + item_col + ", not " + type.toLowerCase() + "\n" + line_path).red;
                console.log(result);
            }
        }
        catch (error) {
            console.log(error);
        }
    },
    // Other tests...
    expect: function (message, value, assertion) {
        var value_col;
        try {
            if (value === assertion) {
                console.log((" \u2714\uFE0F  Expected " + message).green);
            }
            else {
                var err_2 = new Error("\u274C Test Failed");
                var stack = err_2.stack.split('\n');
                var line_path = stack[2].split('/');
                value_col = ("" + value).yellow;
                console.log((" \u274C Expected " + message + " not " + value_col + "\n  " + line_path).red);
            }
        }
        catch (error) {
            console.log(error);
        }
    },
};
export default mulika;
