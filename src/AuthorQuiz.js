import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero(params) {
  return (
    <div className='row'>
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}

function Book({ title }) {
  return (
    <div className='answer'>
      <h4>{title}</h4>
    </div>
  )
}

function Turn({ author, books }) {
  return (
    <div className='row turn' style={{ backgroundColor: 'white' }}>
      <div className='col-4 offset-1'>
        <img src={author.imageUrl} alt='Author' className='author-image' />
      </div>
      <div className='col-6'>
        {books.map((title) => <Book title={title} key={title} />)}
      </div>
    </div>
  );
}

function Continue(params) {

}

function Footer(params) {
  return (
    <div className='row' id='footer'>
      <p className='text-muted credit'>
        All images are from <a href='https://google.com'>Google</a>
      </p>
    </div>
  );
}

function AuthorQuiz({ turnData }) {
  return (
    <div className='container-fluid'>
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
