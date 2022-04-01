import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Registration from './pages/validation/registration';
import Home from './pages/homePage/home';
import {
    BrowserRouter as Router,
    Route,
    Routes,//==Switch in 'react-router-dom' v6
    Link
} from 'react-router-dom';
import React from "react";

function App() {
  return (
      <>
          <header>
              <Header />
              <hr/>
          </header>
          <body>
              <Router>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route path="/registration" element={<Registration />}/>
                  </Routes>
              </Router>
          </body>
          <footer>
              <hr/>
              <Footer />
          </footer>
      </>
  );
}

export default App;
