
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
module.exports = ChartHelper;
