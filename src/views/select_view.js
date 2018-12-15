const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('News:news-ready', event => {
    const news = event.detail;
    this.populate(news);
  });// check

  this.element.addEventListener('change', (event)=> {
    const selected = event.target.detail;
    console.log(selected);
    PubSub.publish('News:SelectView:news-selected', selected);
  })
};

SelectView.prototype.populate = function (news) {
  news.forEach((data) => {
    const option = document.createElement('option')
    option.textContent =  data.headline;
    this.element.appendChild(option)
  });

};


module.exports = SelectView;
