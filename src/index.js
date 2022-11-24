import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import reportWebVitals from './reportWebVitals';
import { shuffle, sample } from 'underscore';
const authors = [
  {
    name: 'Allama Iqbal',
    imageUrl: 'images/authors/Iqbal.jpeg',
    imageSource: 'Google',
    books: ['Bang e Dara']
  },
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/MarkTwain.jpg',
    imageSource: 'Google',
    books: ['The adventures of Huckleberry Finn']
  },
  {
    name: 'Hali',
    imageUrl: 'images/authors/Hali.jpeg',
    imageSource: 'Google',
    books: ['Hayat e Javed']
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i) {
    console.log('p:', p, 'c:', c, 'i:', i);
    return p.concat(c.books)
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) => author.books.some((title) => title === answer))
  }
}
const state = {
  turnData: getTurnData(authors)
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthorQuiz {...state} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
