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
    // console.log(newsItemSelected);
    PubSub.publish('News:news-ready', newsItemSelected);
  });
};

Headlines.prototype.getNewsData = function () {
  const requestHelper = new RequestHelper('https://newsapi.org/v2/everything?q=unitedkingdom&pageSize=10&apiKey=b3c0e6f0f90b46c4aa2d52cf03a2ce35')
  requestHelper.get().then((apiResult) => {
    this.newsData = apiResult.articles;
    console.log(this.newsData);
    const headline = this.getListofNames();

    PubSub.publish('News:news-ready', this.newsData);
  });
};

Headlines.prototype.getListofNames = function () {
  return this.newsData
  .map(news => news.name)
  .filter((head, index, summary) => summary.indexOf(head) === index);
};

Headlines.prototype.getNews = function (primaryExchangeName) {
  const result = this.newsData.filter(dataItem => dataItem.title === primaryExchangeName);
  console.log(result);
  return result;

};

module.exports = Headlines;
