
const ChartHelper = function(words) {
  const wordData = [];
  for(word of words) {
    wordData.push({
      name: word.author

    });
  }

  return wordData;
}
module.exports = ChartHelper;
