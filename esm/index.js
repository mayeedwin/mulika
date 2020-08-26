var mulika = {
    // Type check...
    typeCheck: function (item) {
        try {
            var result = void 0;
            var itemCol = void 0;
            var type = Object.prototype.toString.call(item.value).slice(8, -1);
            itemCol = ("" + item.type.toLowerCase()).yellow;
            if (type.toLowerCase() === item.type.toLowerCase()) {
                result = (" \u2714\uFE0F  Passed type check of typeof " + itemCol).green;
                console.log(result);
            }
            else {
                var err = new Error(" \u274C Failed Type Check");
                var stack = err.stack.split('\n');
                var linePath = stack[2].split('/');
                result = (" \u274C Expected typeof " + itemCol + ", not " + type.toLowerCase() + "\n" + linePath).red;
                console.log(result);
            }
        }
        catch (error) {
            console.log(error);
        }
    },
    // Other tests...
    expect: function (message, value, assertion) {
        var valueCol;
        try {
            if (value === assertion) {
                console.log((" \u2714\uFE0F  Expected " + message).green);
            }
            else {
                var err = new Error("\u274C Test Failed");
                var stack = err.stack.split('\n');
                var linePath = stack[2].split('/');
                valueCol = ("" + value).yellow;
                console.log((" \u274C Expected " + message + " not " + valueCol + "\n  " + linePath).red);
            }
        }
        catch (error) {
            console.log(error);
        }
    },
};
export default mulika;
