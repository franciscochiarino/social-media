export const getPosts = async () => {
  try {
    const data = await fetch('/posts');
    const { posts } = await data.json();
    return posts;
  }
  catch(err) {
    return err;
  }
};

export const addPost = async (id, firstName, lastName, content) => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(id, firstName, lastName, content)
  }

  try {
    const data = await fetch('/posts', options);
    const res = data.json();
    return res;
  }
  catch(err) {
    return err;
  }
};