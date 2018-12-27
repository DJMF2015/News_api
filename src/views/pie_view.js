const PubSub = require('../helpers/pub_sub.js');
const ChartHelper = require('../helpers/chart_helper.js');
const PieChart = require('../models/pie_chart.js');

const ChartView = function (container) {
  this.container = container;
}


ChartView.prototype.bindEvents = function () {
  PubSub.subscribe('News:news-ready', (event) => {
    //const news = event.detail;
    const pieNews = event.detail;
    console.log(pieNews)
    this.renderPieChart(pieNews);
  });
}

ChartView.prototype.renderPieChart = function(pieNews) {
  this.container.innerHTML = '';

  const dataForCloud = ChartHelper(pieNews);
  const chartContainer = document.createElement('div');
  chartContainer.className = 'pie-chart';
  const pieChart = new PieChart('pie', dataForCloud, chartContainer);
  this.container.appendChild(chartContainer);
};
module.exports = ChartView;
