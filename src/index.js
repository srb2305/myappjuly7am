import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Event from './components/Event';
import Condition from './components/Conditions';
import List from './components/Lists';
import State from './components/State';
import ParantComponent from './components/LiftingStateUp';
import LifeCycle from './components/LifeCycle';
import ApiCall from './components/ApiCall';
import ContactForm from './components/ContactForm';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root2345'));
root.render(
  <React.StrictMode>
    <ContactForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
