const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Headlines = function () {
  this.newsData = [];

};

Headlines.prototype.bindEvents = function () {
  PubSub.subscribe('News:SelectView:news-selected', (event)  => {
    const primaryExchangeName = event.detail;
    console.log(primaryExchangeName);
    const newsItemSelected = this.getNews(primaryExchangeName);
    //console.log(newsItemSelected);
    PubSub.publish('News:news-ready', newsItemSelected);
  });
};
////https://newsapi.org/v2/everything?q=brexit&pageSize=50&apiKey=b3c0e6f0f90b46c4aa2d52cf03a2ce35
Headlines.prototype.getNewsData = function () {
  const requestHelper = new RequestHelper('https://api.iextrading.com/1.0/stock/market/collection/sector?collectionName=Health%20Care')
  requestHelper.get().then((headlines) => {
    this.newsData = headlines; //this.newsData = apiResult.articles;
    // console.log(this.newsData);
    const headline = this.getListofNames();

    PubSub.publish('News:news-ready', this.newsData);
  });
};

Headlines.prototype.getListofNames = function () {
  return this.newsData
  .map(news => news.symbol)
  .filter((head, index, summary) => summary.indexOf(head) === index);
};

Headlines.prototype.getNews = function (primaryExchangeName) {
  // const selected  = this.newsIndex;
 return this.newsData.filter(dataItem => dataItem.primaryExchange === primaryExchangeName);

};
module.exports = Headlines;
