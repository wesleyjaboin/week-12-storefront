import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Products from './Products'
import Logos from './Logos'
import Stores from './Stores'
import NewArrival from './NewArrival'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/"><button class="btn Home">Home</button></Link>
          </li>
          <li>
            <Link to="/products"><button class="btn Products">products</button></Link>
          </li>
          <li>
            <Link to="/logos"><button class="btn Logos">Logos</button></Link>
          </li>
          <li>
            <Link to="/Stores"><button class="btn Stores">Stores</button></Link>
          </li>
          <li>
          
            <Link to="/NewArrival"><button class="btn New Arrival"> New Arrival</button></Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/logos">
            <Logos />
          </Route>
          <Route path="/Stores">
            <Stores />
          </Route>
          <Route path="/NewArrival">
            <NewArrival />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}