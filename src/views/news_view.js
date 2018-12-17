const PubSub = require('../helpers/pub_sub.js');
const NewsListView = require('./news_list_view.js');

const NewsView = function (container) {
  this.container = container;
}


NewsView.prototype.bindEvents = function () {
  PubSub.subscribe('News:news-ready', (event) => {
    const news = event.detail;
     console.log(news)
    this.render(news);
  });
}

NewsView.prototype.render = function (newsData) {
  this.container.innerHTML = '';

  for (news of newsData) {
    const newsItem = new NewsListView(news, this.container)
    newsItem.render();
    // return newsItem;
  }
};

NewsView.prototype.createNewsListItem = function (data) {
  const newsListView = new NewsListView();
  const newsDetail = newsDetailView.createNewsList(data)
  return newsDetail;
}


module.exports = NewsView;
