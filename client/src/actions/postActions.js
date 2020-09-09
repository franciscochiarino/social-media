export const getPosts = async () => {
  const data = await fetch('/posts');
  const { posts } = await data.json();
  return posts;
}