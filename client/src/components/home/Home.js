import React, { useEffect, useState } from 'react';
import PostCardContainer from './PostCardContainer';
import { getPosts } from '../../actions/postActions';
import PostForm from './PostForm';

export default function Home({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then(posts => {
        setPosts(posts);
      })
  }, []);

  const renderPosts = posts.map(({ id, author, date, content }) => {
    return (
      <PostCardContainer key={id} author={author} content={content} date={date} user={user} />
    )
  })

  return (
    <>
      {user ? <PostForm user={user} /> : null}
      {renderPosts.reverse()}
    </>
  )
}
