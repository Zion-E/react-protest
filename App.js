import React from 'react';
//Routing
import { BrowserRouter as Router } from 'react-router-dom';
//Components
import Background from './components/Background';
import Phasetwo from './components/Phasetwo';
import Gallery from './components/Gallery';
import Whatwedo from './components/Whatwedo';
import Lower from './components/Lower';
import Footer from './components/Footer';
//Styles
import { GlobalStyle } from './GlobalStyle';


const App = () =>(
  <Router>
    <Background />
    <Phasetwo />
    <Gallery />
    <Whatwedo />
    <Lower />
    <Footer />
      <GlobalStyle />
  </Router>
);

export default App;
