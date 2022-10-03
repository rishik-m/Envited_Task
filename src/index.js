import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Event from './Event';
import Form from './Form';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/event" element= {<Event />} />
          <Route path="/create" element= {<Form />} />
          <Route path="/" element= {<App />} />
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
