
import React from 'react';
import NavigationBar from './NavigationBar';
import { HashRouter, Switch, Route } from 'react-router-dom'
import People from './People';
import Images from './Images';
import Home from './Home';
import './main.scss';

function App() {
  return (
    <>
      <HashRouter>
        <NavigationBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/people" component={People} />
          <Route exact path="/images" component={Images} />
        </Switch>
      </HashRouter>
    </>
  );
}


export default App;