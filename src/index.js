import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import BlogContextProvider from './contexts/BlogContext';


ReactDOM.render(
  <AuthContextProvider>
      <BlogContextProvider>
    <App />

       </BlogContextProvider>
    </AuthContextProvider>,
  document.getElementById('root')
);

