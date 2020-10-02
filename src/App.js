import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import MyChat from './pages/chat/MyChat';
import LandingPage from './pages/landing/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/chat" component={MyChat} />
      </Router>
    </div>
  );
}

export default App;
