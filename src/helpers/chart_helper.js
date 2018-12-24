
const ChartHelper = function(words) {
  const wordData = [];
  for(word of words) {
    wordData.push({
      name: word.title
   
    });
  }

  return wordData;
}
module.exports = ChartHelper;
