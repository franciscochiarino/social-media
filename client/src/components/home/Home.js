import React, { useEffect, useContext, useState } from 'react';
import PostCardContainer from './PostCardContainer';
import { getPosts } from '../../actions/postActions';
import PostForm from './PostForm';
import { PostsContext } from '../../context/PostsContext';
import { useAlert } from 'react-alert';
import { deletePost } from '../../actions/postActions';
import { addPost } from '../../actions/postActions';

export default function Home({ user }) {
  const [posts, setPosts] = useContext(PostsContext);
  const [updatePosts, setUpdatePosts] = useState(false);
  const alert = useAlert();

  useEffect(() => {
    getPosts()
      .then(res => {
        setPosts(res.posts);
      })
      .catch(err => alert.error('Something went wrong. Please try again later.', { onOpen: () => console.log(err) }));
  }, [setPosts, alert, updatePosts]);

  const handlePostForm = (e, content) => {
    e.preventDefault();

    if (user) {
      addPost(user.id, user.firstName, user.lastName, content)
        .then(() => setUpdatePosts(!updatePosts))
        .catch(err => alert.error('Something went wrong. Please try again later', { onOpen: () => console.log(err) }));
    } else {
      alert.info('Please log in to post something.');
    }
  };

  const handleDeletePostButton = (postId) => {
    deletePost(postId)
      .then(() => setUpdatePosts(!updatePosts))
      .catch(err => alert.error('Something went wrong. Please try again later', { onOpen: () => console.log(err) }));
  };

  const renderPosts = posts.map(({ _id, author, date, content }) => {
    return (
      <PostCardContainer key={_id} id={_id} author={author} content={content} date={date} user={user} handleDeletePostButton={handleDeletePostButton} />
    )
  });

  return (
    posts ? (
      <>
        {user ? <PostForm user={user} handlePostForm={handlePostForm} /> : null}
        {renderPosts.reverse()}
      </>
    ) : (null)
  )
}
