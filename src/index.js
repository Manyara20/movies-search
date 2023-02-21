import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchMovies from './searchMovie';
import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
      <nav className="navigation">
        <img className="image" alt='logo' src="https://zcodes.org/img/z-code.png" />
        <h1 className="title"> Movie Search</h1>
        </nav>
        <SearchMovies/>
      </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

