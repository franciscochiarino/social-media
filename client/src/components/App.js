import React, { useEffect, useContext } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import '../main.scss';

// Components
import NavigationBar from './nav/NavigationBar';
import People from './people/People';
import Images from './images/Images';
import Home from './home/Home';
import UserProfile from './user/UserProfile';
import Login from './user/Login';
import SignUp from './user/SignUp';
import { getUser } from '../actions/userActions';
import { UserContext } from '../context/UserContext';
import { PostsProvider } from '../context/PostsContext';

function App() {
  const [user, setUser] = useContext(UserContext);
  const id = sessionStorage.getItem('id');

  useEffect(() => {
    if (id) {
      getUser(id)
        .then(res => setUser(res.user))
        .catch(err => console.log(err));
    }
  }, [id, setUser]);

  return (
    <>
      <HashRouter>
          <NavigationBar user={user} />
          <PostsProvider>
            <Switch>
              <Route exact path="/" render={props => <Home {...props} user={user} /> } />
              <Route exact path="/people" render={props => <People {...props} user={user} />} />
              <Route exact path="/images" component={Images} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signUp" component={SignUp} />
              <Route exact path="/profile/:id" component={UserProfile} />
            </Switch>
          </PostsProvider>
      </HashRouter>
    </>
  );
}


export default App;