const digitMap = {
    "0": "34184834738",
    "1": "31437783784",
    "2": "34384838341",
    "3": "38284841883",
    "4": "34343934885",
    "5": "34664716437",
    "6": "34773878742",
    "7": "34414949419",
    "8": "43841616341",
    "9": "33718318436"
};

function encodeNumber(input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        const digit = input[i];
        if (digitMap[digit]) {
            result += digitMap[digit];
        } else {
            throw new Error(`Ký tự không hợp lệ: ${digit}`);
        }
    }
    return result;
}

if (typeof module !== 'undefined') {
    module.exports = { encodeNumber };
}
