const PubSub = require('../helpers/pub_sub.js');
const Chart = require('../models/chart.js');
const ChartHelper = require('../helpers/chart_helper.js');

const WordChart= function(container){
  this.container = container;
}

WordChart.prototype.bindEvents = function() {
  PubSub.subscribe('News:news-ready', (event)=> {
    // /this.renderWordCloud(event.detail);
  });
}


WordChart.prototype.renderWordCloud = function(words) {
  this.container.innerHTML = '';
  const dataForCloud = ChartHelper(words);
  const chartContainer = document.createElement('div');
  chartContainer.className= 'word-cloud';
  const chart = new Chart('NewsCloud', dataForCloud, chartContainer);
  this.container.appendchild(chartContainer);
}

module.exports = WordChart;
