
const ChartHelper = function(words) {
  const wordData = [];
  for(word of words) {
    wordData.push({
      name: word.title
      //y: (word.latestPrice * word.amount)
    });
  }

  return wordData;
}
module.exports = ChartHelper;
