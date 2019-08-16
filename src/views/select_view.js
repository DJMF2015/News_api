const PubSub = require('../helpers/pub_sub.js');
//constructor
const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('News:news-ready', event => {
    const news = event.detail;
    const dropDownItems = this.getElementsForDropdown(news);
    this.populate(dropDownItems);
  });

  this.element.addEventListener('change', (event)=> {
    const selected = event.target.value;
  //  console.log(selected);
    PubSub.publish('News:SelectView:news-selected', selected);
  })
};

SelectView.prototype.getElementsForDropdown = function (allData) {
  return allData
  .map(dataItem => dataItem.title)
  .filter((head, index, summary) => summary.indexOf(head) === index);
};

SelectView.prototype.populate = function (itemsForDropdown) {

  const container = document.createElement('div');

  itemsForDropdown.forEach((item) => {
    const option = document.createElement('option')
    option.value = item;
    option.textContent =  item;
    this.element.appendChild(option);

  });
};

module.exports = SelectView;
