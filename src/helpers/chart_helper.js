
const ChartHelper = function(words) {
  const wordData = [];
  for(word of words) {
    wordData.push({
      name: word.title,
      y: 32.0
    });

  }
  return wordData;
}
// var pattern  = words.split(/[,\. ]+/g)
// matchedWords = words.match(pattern);
// const counts = matchedWords.reduce((accumulator, word) => {
//   return accumulator + word;
// }, 0);
//
// if ( words.hasOwnProperty( word ) ) {
//   words[ word ] = words[ word ] + 1;
// } else {
//   /* `stats` does not yet have an entry for the current `word`.
//   As a result, let's add a new entry, and set count to 1. */
//   words[ word ] = 1;
// }
// return words;

// /* Now that `counts` has our object, we can log it. */
// console.log( counts );
// // ());
// };
module.exports = ChartHelper;
