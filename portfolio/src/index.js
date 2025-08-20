import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
  easing: 'ease-in-out',
  anchorPlacement: 'top-bottom'
});


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
