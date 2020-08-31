import React, { useEffect, useState } from 'react';
import PeopleCardContainer from './PeopleCardContainer';
import PeopleCardSkeleton from '../skeletons/PeopleCardSkeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingBottom: '4rem',
  }
})

export default function People() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    // Get Users
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  const renderUsers = users.map(({ id, name }) => {
    return (
      <PeopleCardContainer id={id} name={name} />
    )
  });

  return (
    <section className={classes.root} >
      {loading ? new Array(10).fill(<PeopleCardSkeleton />) : null }
      {renderUsers}
    </section>
  )
}
