
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact Me/Contact';
import Media from './Pages/Media/Media'
import Projects from './Pages/Projects/Projects';
import Navbar from './Pages/Navbar/Navbar';


const App=() => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar/>
          <main>
            <Switch>
            <Route path ="/" exact>
              <Home/>
            </Route>
            <Route path ="/Projects" exact>
              <Projects/>
            </Route>
            <Route path ="/Media" exact>
              <Media/>
            </Route>
            <Route path ="/Contact" exact>
              <Contact/>
            </Route>
            <Redirect to = "/" />
            </Switch>
          </main>
        </Router>
       
      </header>
    </div>
  );
}

export default App;
