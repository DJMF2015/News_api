const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Headlines = function () {
  this.newsData = [];

};

Headlines.prototype.bindEvents = function () {
  PubSub.subscribe('News:SelectView:news-selected', (event)  => {
    const selectedNews = event.detail;
    console.log(selectedNews);
    const newsItemSelected = this.getNews(selectedNews);
    console.log(newsItemSelected);
    PubSub.publish('News:news-ready', newsItemSelected);
  });
};
////https://newsapi.org/v2/everything?q=brexit&pageSize=50&apiKey=b3c0e6f0f90b46c4aa2d52cf03a2ce35
Headlines.prototype.getNewsData = function () {
  const requestHelper = new RequestHelper('https://api.iextrading.com/1.0/stock/aapl/news')
  requestHelper.get().then((headlines) => {
    this.newsData = headlines;
    // console.log(this.newsData);
    const headline = this.getListofNames();

    PubSub.publish('News:news-ready', this.newsData);
  });
};

Headlines.prototype.getListofNames = function () {
  return this.newsData
  .map(brew => brew.headline)
  .filter((beer, index, beers) => beers.indexOf(beer) === index);
};

Headlines.prototype.getNews = function (name) {

 const selected  = this.summary;
 // console.log(name);
  return this.newsData.filter(brew => brew.summary === name);

};

module.exports = Headlines;
