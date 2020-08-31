
import React from 'react';
import NavigationBar from './nav/NavigationBar';
import { HashRouter, Switch, Route } from 'react-router-dom'
import People from './people/People';
import Images from './images/Images';
import Home from './home/Home';
import '../main.scss';
import Login from './user/Login';
import SignUp from './user/SignUp';

function App() {
  return (
    <>
      <HashRouter>
        <NavigationBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/people" component={People} />
          <Route exact path="/images" component={Images} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
        </Switch>
      </HashRouter>
    </>
  );
}


export default App;