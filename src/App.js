import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.scss";
import MyChat from "./pages/chat/MyChat";
import LandingPage from "./pages/landing/LandingPage";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/chat" component={MyChat} />
      </div>
    </HashRouter>
  );
}

export default App;
