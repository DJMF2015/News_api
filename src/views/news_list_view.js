const PubSub = require('../helpers/pub_sub.js');

const NewsListView = function (news, parentEle){
  this.newsData = news;
  this.parent = parentEle;
}

NewsListView.prototype.render = function () {
  const container = document.createElement('div');
  container.classList.add('news');
  container.classList.add('news-list-view');
  console.log(this.newsData);

  const newsTitle = document.createElement('h2');
  newsTitle.textContent = this.newsData.headline;
  container.appendChild(newsTitle);

  const source = document.createElement('p');
  source.textContent = `Source: ${this.newsData.source}`;
  container.appendChild(source);

  const descript = document.createElement('p');
  descript.textContent = `${this.newsData.summary}`;
  container.appendChild(descript);

  // const image = document.createElement('img');
  // image.src = `${this.newsData.image}`;
  // container.appendChild(image);

  const date = document.createElement('p');
  date.textContent = `Date: ${this.newsData.datetime}`;
  container.appendChild(date);
  console.log(descript);
  this.parent.appendChild(container);

}
module.exports = NewsListView;
