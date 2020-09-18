import React, { useEffect, useState } from 'react';
import PeopleCardContainer from './PeopleCardContainer';
import PeopleCardSkeleton from '../skeletons/PeopleCardSkeleton';
import { makeStyles } from '@material-ui/core/styles';
import { getUsers } from '../../actions/userActions';
import { useAlert } from 'react-alert';

const useStyles = makeStyles({
  root: {
    paddingBottom: '4rem',
  }
})

export default function People() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const alert = useAlert();

  useEffect(() => {
    getUsers()
      .then(users => {
        setUsers(users);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        alert.error('Something went wrong, please try again later.');
      });
  }, []);

  const renderUsers = users.map(({ id, firstName, lastName }) => {
    return (
      <PeopleCardContainer id={id} firstName={firstName} lastName={lastName} />
    )
  });

  return (
    <section className={classes.root} >
      {loading ? new Array(10).fill(<PeopleCardSkeleton />) : null }
      {renderUsers}
    </section>
  )
}
