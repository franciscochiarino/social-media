export const getUsers = async () => { 
  try {
    const data = await fetch('/users');
    const { users } = await data.json();
    return users;
  }
  catch(err) {
    return err;
  }
};

export const createUser = async (user) => {

  const postUser = {
    method: 'POST',
    headers: { 
        'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  };

  try {
    const data = await fetch('/users', postUser);
    const user = await data.json();
    return user;
  }
  catch(err) {
    return err;
  }
};