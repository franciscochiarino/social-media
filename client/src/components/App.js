import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import '../main.scss';

// Components
import NavigationBar from './nav/NavigationBar';
import People from './people/People';
import Images from './images/Images';
import Home from './home/Home';
import UserProfile from './user/UserProfile';
import Login from './user/Login';
import SignUp from './user/SignUp';

function App() {
  return (
    <>
      <HashRouter>
        <UserProvider>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/people" component={People} />
            <Route exact path="/images" component={Images} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/profile/:id" component={UserProfile} />
          </Switch>
        </UserProvider>
      </HashRouter>
    </>
  );
}


export default App;