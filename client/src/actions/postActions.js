import e from "express";

export const getPosts = async () => {
  try {
    const data = await fetch('/posts');
    const res = await data.json();
    return res;
  }
  catch(err) {
    return err;
  }
};

export const addPost = async (postId, firstName, lastName, content) => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      author: { id: postId, firstName, lastName },
      content
    })
  };

  try {
    const data = await fetch('/posts', options);
    const res = data.json();
    return res;
  }
  catch(err) {
    return err;
  }
};

export const editPost = async (postId, updatedContent) => {
  const options = {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ content: updatedContent, edited: true }),
  }

  try {
    const data = fetch(`posts/${postId}`, options);
    const res = data.json();
    return res;
  }
  catch(err) {
    return err;
  }
};

export const toggleLike = async (userId, postId) => {
  
};

export const deletePost = async (postId) => {
  const options = {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
  }

  try {
    const data = await fetch(`/posts/${postId}`, options);
    const res = data.json();
    return res;
  }
  catch (err) {
    return err;
  }
}