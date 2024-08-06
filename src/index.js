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
import ParentComponent from './components/ContextApi/ParentComponent';
import Counter from './components/Hooks/UseReducer';
import TextInputWithFocusButtonClick from './components/Hooks/useRef';
import CustomHooks from './components/Hooks/CustomHooks';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Services from './components/Pages/Services';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root2345'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
