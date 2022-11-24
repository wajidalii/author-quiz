import AuthorQuiz from './AuthorQuiz';
import React from 'react';
import ReactDOM from 'react-dom/client';

describe('Author Quiz', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz />, div);
  })
});
