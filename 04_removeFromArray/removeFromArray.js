const removeFromArray = function (arr, arrIndex, arrIndex2, arrIndex3, arrIndex4) {
    if (arr.includes(arrIndex)) { index = arr.indexOf(arrIndex); arr.splice(index, 1); }
    if (arr.includes(arrIndex2)) { index2 = arr.indexOf(arrIndex2); arr.splice(index2, 1); }
    if (arr.includes(arrIndex3)) { index3 = arr.indexOf(arrIndex3); arr.splice(index3, 1); }
    if (arr.includes(arrIndex4)) { index4 = arr.indexOf(arrIndex4); arr.splice(index4, 1); }
    return arr;
};
// Do not edit below this line
module.exports = removeFromArray;