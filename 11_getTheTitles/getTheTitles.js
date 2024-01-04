const getTheTitles = function(books) {
    const n = books.length;
    let bookTitle ='';
    let allTitle = [];
    for (let i = 0; i < n; i++){
        bookTitle = books[i].title;
        allTitle.push(bookTitle);
    }
    return allTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
