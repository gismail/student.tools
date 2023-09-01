import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import CategoryPage from './Components/CategoryPage/CategoryPage'; // Import the CategoryPage component
import { DataProvider } from './Hooks/DataProvider';
import OperationHandler from './Hooks/OperationHandler';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment><Header></Header>
      <div className="App-body">
        <Router>
          <DataProvider> {/* Wrap App component with DataProvider */}
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/categories" element={<CategoryPage />} />
              <Route path="/operations/operation" element={<OperationHandler />} />
            </Routes>
          </DataProvider>
        </Router>
        <Footer/>
      </div>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
