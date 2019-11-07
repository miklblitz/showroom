import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shoppage.component';
import Header from "./components/header/header.component";
import Sign from './components/sign/sign.component';

// import { ReactComponent } from '*.svg';
// Google
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
       //this.setState({currentUser: user});
       createUserProfileDocument(user);
       console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shoppage} /> 
          <Route path='/signin' component={Sign} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
