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
  newsTitle.textContent = this.newsData.author;
  container.appendChild(newsTitle);

  const source = document.createElement('p');
  source.textContent = `Source: ${this.newsData.content}`;
  container.appendChild(source);

  const descript = document.createElement('p');
  descript.textContent = `${this.newsData.companyName}`;
  container.appendChild(descript);

  const date = document.createElement('p');
  date.textContent = `Date: ${this.newsData.description}`;
  container.appendChild(date);

  const image = document.createElement('img');
  image.src = `${this.newsData.urlToImage}`;
  container.appendChild(image);

  console.log(descript);
  this.parent.appendChild(container);

}
module.exports = NewsListView;
