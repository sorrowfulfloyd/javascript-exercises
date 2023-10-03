const palindromes = function (str) {

    let newStr = str.split("").reverse().join("").replace(/\W/g, "").toLowerCase();
    let newnewStr = str.replace(/\W/g, "").toLowerCase();
    if (newStr == newnewStr) {
        return true;
    } else {
        return false;
    }
};

console.log(palindromes("ZZZZ car,_ a man, _a maracaz."))

// Do not edit below this line
module.exports = palindromes;
