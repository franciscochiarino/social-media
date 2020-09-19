import React from 'react';
import PostCardContainer from './PostCardContainer';
import PostForm from './PostForm';

export default function Home({ user, posts, updatePosts, setUpdatePosts }) {

  const renderPosts = posts.map(({ _id, author, date, content }) => {
    return (
      <PostCardContainer key={_id} id={_id} author={author} content={content} date={date} user={user} updatePosts={updatePosts} setUpdatePosts={setUpdatePosts} />
    )
  });

  return (
    posts ? (
      <>
        {/* Post form */}
        {user ? <PostForm user={user} updatePosts={updatePosts} setUpdatePosts={setUpdatePosts} /> : null}

        {/* Posts */}
        {renderPosts.reverse()}
      </>
    ) : (null)
  )
}
