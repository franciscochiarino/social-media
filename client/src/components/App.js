import React, { useEffect, useContext, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { useAlert } from 'react-alert';
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
import { PostsContext } from '../context/PostsContext';
import { getPosts } from '../actions/postActions';


function App() {
  const [user, setUser] = useContext(UserContext);
  const [posts, setPosts] = useContext(PostsContext);
  const [updatePosts, setUpdatePosts] = useState(false);
  const alert = useAlert();

  const id = sessionStorage.getItem('id');

  useEffect(() => {
    if (id) {
      getUser(id)
        .then(res => setUser(res.user))
        .catch(err => alert.error('Something went wrong. Please try again later.', { onOpen: () => console.log(err) }));
    }
  }, [id, setUser, alert]);

  useEffect(() => {
    getPosts()
      .then(res => {
        setPosts(res.posts);
      })
      .catch(err => alert.error('Something went wrong. Please try again later.', { onOpen: () => console.log(err) }));
  }, [setPosts, alert, updatePosts]);

  return (
    <>
      <HashRouter>
          <NavigationBar user={user} />
            <Switch>
              <Route exact path="/" render={props => <Home {...props} user={user} posts={posts} updatePosts={updatePosts} setUpdatePosts={setUpdatePosts} /> } />
              <Route exact path="/people" render={props => <People {...props} user={user} />} />
              <Route exact path="/images" component={Images} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signUp" component={SignUp} />
              <Route exact path="/profile/:id" render={props => <UserProfile {...props} user={user} posts={posts} updatePosts={updatePosts} setUpdatePosts={setUpdatePosts} /> } />
            </Switch>
      </HashRouter>
    </>
  );
}


export default App;