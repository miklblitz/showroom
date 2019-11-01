import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shoppage.component';
import Header from "./components/header/header.component";
import Sign from './components/sign/sign.component';

function App() {
  return (
    <div> 
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shoppage} />
        <Route path='/signin' component={Sign} />
      </Switch>
    </div>
  );
}

export default App;
