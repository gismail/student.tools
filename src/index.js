import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import CategoryPage from './Components/CategoryPage/CategoryPage'; // Import the CategoryPage component


const placeholderToolData = [
  {
    title: 'Tool 1',
    categories: ['math', 'science'],
    description: 'This is a description of Tool 1.',
    titleLink: '/tool1',
  },
  {
    title: 'Tool 2',
    categories: ['physics'],
    description: 'This is a description of Tool 2.',
    titleLink: '/tool2',
  },
  {
    title: 'Tool 3',
    categories: ['chemistry', 'science'],
    description: 'This is a description of Tool 3.',
    titleLink: '/tool3',
  },
  {
    title: 'Tool 4',
    categories: ['biology'],
    description: 'This is a description of Tool 4.',
    titleLink: '/tool4',
  },
  {
    title: 'Tool 5',
    categories: ['math', 'physics'],
    description: 'This is a description of Tool 5.',
    titleLink: '/tool5',
  },
  {
    title: 'Tool 6',
    categories: ['chemistry'],
    description: 'This is a description of Tool 6.This is a description of Tool 6.This is a description of Tool 6.This is a description of Tool 6.This is a description of Tool 6.This is a description of Tool 6.',
    titleLink: '/tool6',
  },
  {
    title: 'Tool 7',
    categories: ['biology'],
    description: 'This is a description of Tool 7.',
    titleLink: '/tool7',
  },
  // Add more placeholder data objects as needed
];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<App placeholderToolData={placeholderToolData}/>} />
        <Route path="/categories" element={<CategoryPage placeholderToolData={placeholderToolData}/>} /> {/* CategoryPage route */}
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
