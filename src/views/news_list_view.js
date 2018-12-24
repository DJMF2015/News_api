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
  newsTitle.textContent = `${this.newsData.title}`;
  container.appendChild(newsTitle);

  const descript = document.createElement('p');
  descript.textContent = `${this.newsData.description}`;
  container.appendChild(descript);

  // const author = document.createElement('p');
  // author.textContent = `Author: ${this.newsData.author}`;
  // container.appendChild(author);

  const source = document.createElement('p');
  source.textContent = `Source: ${this.newsData.source.name}`;
  container.appendChild(source);

  const a = document.createElement('a');
  a.textContent =  `${this.newsData.url}`;
  container.appendChild(a);

  const image = document.createElement('img');
  image.src = `${this.newsData.urlToImage}`;
  container.appendChild(image);

  this.parent.appendChild(container);

}
module.exports = NewsListView;
