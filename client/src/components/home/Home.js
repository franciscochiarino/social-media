import React, { useEffect, useState } from 'react';
import PostCardContainer from './PostCardContainer';
import PostCardSkeleton from '../skeletons/PostCardSkeleton';
import {getUsers} from '../../actions/userActions'; 

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    // Get Posts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
    // getUsers().then(users => setUsers(users));
  }, []);

  const renderPosts = posts.map(({ id, title, body }) => {
    return (
      <PostCardContainer key={id} id={id} title={title} body={body} />
    )
  })

  return (
    <>
      {loading ? new Array(10).fill(<PostCardSkeleton />) : null }
      {renderPosts}
    </>
  )
}
