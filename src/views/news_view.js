const PubSub = require('../helpers/pub_sub.js');
const NewsListView = require('./news_list_view.js');
const ChartHelper = require('../helpers/chart_helper.js');
const PieChart = require('../models/pie_chart.js');

const NewsView = function (container) {
  this.container = container;
}


NewsView.prototype.bindEvents = function () {
  PubSub.subscribe('News:news-ready', (event) => {
    const news = event.detail;

     console.log(news)
    this.render(news);
    this.renderPieChart(news);
  });
}

NewsView.prototype.render = function (newsData) {
  this.container.innerHTML = '';

  for (news of newsData) {
    const newsItem = new NewsListView(news, this.container)
    console.log(news)
    newsItem.render();
  }
};

NewsView.prototype.renderPieChart = function(words) {
  this.container.innerHTML = '';
  //const appContainer = document.querySelector('.app_container');
  const dataForCloud = ChartHelper(words);
  const chartContainer = document.createElement('div');
  chartContainer.className = 'pie-chart';
  const pieChart = new PieChart('NewsCloud', dataForCloud, chartContainer);
  this.container.appendChild(chartContainer);
};

NewsView.prototype.createNewsListItem = function (data) {
  const newsListView = new NewsListView();
  const newsDetail = newsDetailView.createNewsList(data)
  return newsDetail;
}


module.exports = NewsView;
