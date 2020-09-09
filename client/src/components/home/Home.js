import React, { useEffect, useState } from 'react';
import PostCardContainer from './PostCardContainer';
import PostCardSkeleton from '../skeletons/PostCardSkeleton';
import { getPosts } from '../../actions/postActions';
import PostInput from './PostInput';

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

  const renderPosts = posts.map(({ id, author, content }) => {
    return (
      <PostCardContainer key={id} author={`${author.firstName} ${author.lastName}`} content={content} />
    )
  })

  return (
    <>
      <PostInput />
      {loading ? new Array(10).fill(<PostCardSkeleton />) : null }
      {renderPosts}
    </>
  )
}
