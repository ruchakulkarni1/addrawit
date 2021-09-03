import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from "./Tabs/about"
import Contact from "./Tabs/contact"
import Shop from "./Tabs/shop"

function App() {
  return (
    <Router>
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark ">
      <a class="navbar-brand inactiveLink"><h1 className="links">AdDrawIt</h1></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbarMd">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="collapsingNavbarMd">
        <ul class="navbar-nav">
          <li class="nav-item">
              <Link to="/"><h4 className="links">Home</h4></Link>
          </li>
          <li class="nav-item">
              <Link to="/shop"><h4 className="links">Shop</h4></Link>
          </li>
          <li class="nav-item">
              <Link to="/about"><h4 className="links">About</h4></Link>
          </li>
          <li class="nav-item">
              <Link to="/contact"><h4 className="links">Contact</h4></Link>
          </li>
      </ul>
  </div>
</nav>
<Switch>
    <Route path="/about">
      <div class="aboutMainDiv">
          <About></About>
      </div>
    </Route>
    <Route path="/contact">
      <div class="contactMainDiv">
          <Contact></Contact>
      </div>
    </Route>
    <Route path="/shop">
      <div class="shopMainDiv">
          <Shop></Shop>
      </div>
    </Route>
</Switch>
</div>
</Router>
  );
}

export default App;
