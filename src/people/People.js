import React, { useEffect, useState } from 'react';
import PeopleCardContainer from './PeopleCardContainer';
import PostCardSkeleton from '../skeletons/PostCardSkeleton';
import PeopleCardSkeleton from '../skeletons/PeopleCardSkeleton';

export default function People() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <>
      {loading ? new Array(10).fill(<PeopleCardSkeleton />) : null }
      {renderUsers}
    </>
  )
}
