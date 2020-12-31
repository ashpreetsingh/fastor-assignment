import React, { Fragment } from 'react';

// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Register from './routes/register';
import OTP from './routes/otpinput';
import Home from './routes/home';
import Restro from './components/restroView'

function App() {
  return (

    <Fragment>
  
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={OTP} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/lists/:id" component={Restro} />
      </Switch>
      </BrowserRouter>
     
    </Fragment>
  );
}

export default App;
