import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shoppage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
