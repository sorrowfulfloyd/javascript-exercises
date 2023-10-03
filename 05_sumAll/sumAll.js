const sumAll = function (x, y) {
    if (!(typeof (x) == 'number') || !(typeof (y) == 'number')) { return 'ERROR' }
    if (x < 0 || y < 0) { return 'ERROR' }

    let sum = 0;
    if (x < y) {
        for (x; x <= y; x++) {
            sum += x;
        };
    } else {
        for (y; y <= x; y++) {
            sum += y;
        };
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
