import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
 //import Header from './component/Header';
 //import Herosection from './component/Herosection';
// import Courses from './component/Courses';
// import Footer from './component/Footer';
import Product from './component/Product';
import Header from './component/Header';
import Herosection from './component/Herosection';
import Footer from './component/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Herosection/>
    <Product/>
    <Footer/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
