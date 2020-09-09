export const getUsers = async () => { 
  const data = await fetch('/users');
  const { users } = await data.json();
  return users;
}