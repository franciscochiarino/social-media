import React, { useEffect, useState } from 'react';
import CardContainer from './CardContainer';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Get Posts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const renderPosts = posts.map(({ id, title, body }) => {
    return (
      <CardContainer key={id} title={title} body={body} />
    )
  })


  return (
    <>
      {renderPosts}
    </>
  )
}
