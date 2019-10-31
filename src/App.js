import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const CarsPage = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Cars page</h1>
      <Link to='/'>Mainpage</Link>
      <button onClick={()=>props.history.push('/')}>To main</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/cars' component={CarsPage} />
      </Switch>
    </div>
  );
}

export default App;
