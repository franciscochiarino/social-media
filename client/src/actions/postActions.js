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

export const addPost = async (id, firstName, lastName, content) => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      author: { id, firstName, lastName },
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

export const deletePost = async (id) => {
  const options = {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
  }

  try {
    const data = await fetch(`/posts/${id}`, options);
    const res = data.json();
    return res;
  }
  catch (err) {
    return err;
  }
}