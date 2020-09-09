import React, { useEffect, useState } from 'react';
import PostCardContainer from './PostCardContainer';
import PostCardSkeleton from '../skeletons/PostCardSkeleton';
import { getPosts } from '../../actions/postActions';
import PostForm from './PostForm';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(posts => {
        setPosts(posts);
        setLoading(false);
      })
  }, []);

  const renderPosts = posts.map(({ id, author, date, content }) => {
    return (
      <PostCardContainer key={id} author={`${author.firstName} ${author.lastName}`} content={content} date={date} />
    )
  })

  return (
    <>
      <PostForm />
      {loading ? new Array(10).fill(<PostCardSkeleton />) : null }
      {renderPosts.reverse()}
    </>
  )
}
