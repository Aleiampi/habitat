import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyDKctLSAv5QpCe-7PJ8U28yRvLXZp2pzhE",
  authDomain: "habitat-80afb.firebaseapp.com",
  projectId: "habitat-80afb",
  storageBucket: "habitat-80afb.appspot.com",
  messagingSenderId: "710138929484",
  appId: "1:710138929484:web:74faee106112d4aecb6fe9"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
