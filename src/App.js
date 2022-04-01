import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer'
import Home from './pages/homePage/home';
import {
    BrowserRouter as Router,
    Route,
    Routes,//==Switch in 'react-router-dom' v6
    Link
} from 'react-router-dom';

function App() {
  return (
      <>
          <header>
              Header
              <hr/>
          </header>
          <body>
              <Router>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                  </Routes>
              </Router>
          </body>
          <footer>
              <hr/>
              Footer
          </footer>
      </>
  );
}

export default App;
