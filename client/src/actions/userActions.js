export const getUsers = async () => { 
  try {
    const data = await fetch('/users');
    const { users } = await data.json();
    return users;
  }
  catch(err) {
    return err;
  }
}