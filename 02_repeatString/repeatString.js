const repeatString = function (str, times) {
    if (times < 0) { return 'ERROR' };
    let finalstring = '';
    for (let i = 0; i < times; i++) {
        finalstring += str;
    }
    return finalstring;
};

// Do not edit below this line
module.exports = repeatString;
