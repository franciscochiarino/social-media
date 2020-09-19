import React, { useEffect, useState } from 'react';
import PeopleCardContainer from './PeopleCardContainer';
import { makeStyles } from '@material-ui/core/styles';
import { getUsers } from '../../actions/userActions';
import { useAlert } from 'react-alert';

const useStyles = makeStyles({
  root: {
    paddingBottom: '4rem',
  }
})

export default function People({ user }) {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  const alert = useAlert();

  useEffect(() => {
    getUsers()
      .then(users => {
        setUsers(users);
      })
      .catch(err => {
        console.log(err);
        alert.error('Something went wrong, please try again later.');
      });
  }, [alert]);

  const renderUsers = users.map(({ _id, firstName, lastName }) => {
    return (
      <PeopleCardContainer id={_id} firstName={firstName} lastName={lastName} user={user} />
    )
  });

  return (
    <section className={classes.root} >
      {renderUsers}
    </section>
  )
}
