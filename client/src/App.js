import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './redux/actions/authActions'

import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Check for token
if(localStorage.jwtToken) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode user token and get user info and exp
  const decode = jwt_decode(localStorage.jwtToken);
  // Set user and is authenticated
  store.dispatch(setCurrentUser(decode)); 
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
