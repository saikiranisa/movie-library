import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0providerwithhistory from './auth0-provider-with-history';


ReactDOM.render(
 <Router>
  <Auth0providerwithhistory>
    <App/>
  </Auth0providerwithhistory>
 </Router>,
  document.getElementById('root')
);
