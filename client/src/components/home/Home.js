import React, { useEffect, useContext } from 'react';
import PostCardContainer from './PostCardContainer';
import { getPosts } from '../../actions/postActions';
import PostForm from './PostForm';
import { PostsContext } from '../../context/PostsContext';
import { useAlert } from 'react-alert';

export default function Home({ user }) {
  const [posts, setPosts] = useContext(PostsContext);
  const alert = useAlert();

  useEffect(() => {
    getPosts()
      .then(res => {
        setPosts(res.posts);
      })
      .catch(err => {
        console.log(err);
        alert.error('Something went wrong. Please try again later.');
      })
  }, [setPosts, alert]);

  const renderPosts = posts.map(({ _id, author, date, content }) => {
    return (
      <PostCardContainer key={_id} author={author} content={content} date={date} user={user} />
    )
  });

  return (
    posts ? (
      <>
        {user ? <PostForm user={user} /> : null}
        {renderPosts.reverse()}
      </>
    ) : (null)
  )
}
