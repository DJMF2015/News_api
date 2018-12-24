const Headlines = require('./models/headlines.js');
const SelectView = require('./views/select_view.js');
const NewsView = require('./views/news_view.js');
const WordChart = require('./views/word_chart.js');
const NewsListView = require('./views/news_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript loaded');

  const news = new Headlines();
  news.getNewsData();
  news.bindEvents();


  const newsSelect =  document.querySelector('#news');
  const newsSelectView = new SelectView(newsSelect);
  newsSelectView.bindEvents();

  const newsContainer = document.querySelector('#news-container')
  const newsView = new NewsView(newsContainer)
  newsView.bindEvents();

  const appContainer = document.querySelector('.app_container');
  const wordChart = new WordChart(appContainer);
  wordChart.bindEvents();


});
