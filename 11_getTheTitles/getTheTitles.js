const getTheTitles = function (book) {
    let i = [];
    for (let x in book) {
        i.push(book[x].title)
    };
    return i;
};

// Do not edit below this line
module.exports = getTheTitles;
