import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Header';
import Landing from './pages/Landing';
import Welcome from './pages/Welcome';

function App() {
  const signedIn = true;

  if (signedIn) { // signed in Users see these routes
    return (
      <Router>
        <Nav />
        <Route path='/' component={Welcome}/>

      </Router>
    );
  }   // base landing page for users not signed in.
  else {
    return (
      <Router>
        <Nav />
        <Route path='/' component={Landing} />
      </Router>
    )
  }
}

export default App;
