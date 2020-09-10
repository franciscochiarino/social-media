import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StyledCard from '../../style/StyledCard';

const useStyles = makeStyles(() => ({
  avatar: {
    width: '170px',
    height: '170px',
    position: 'relative',
    margin: '0 auto',
    top: '40px',
    zIndex: 8
  },
  cards: {
    textAlign: 'center',
    position: 'relative',
    top: '-70px'
  },
  profileCard: {
    padding: '6rem 0 2rem 0',
  },
  postTitle: {
    padding: '0.5rem 0'
  }
}));

export default function UserProfile() {
  const classes = useStyles();

  return (
    <>
      <Avatar className={classes.avatar} />

      <div className={classes.cards} >
        <StyledCard className={classes.profileCard}>
          <Typography variant="h1">Jack Nicholson</Typography>
          <Typography variant="subtitle1" >Member of social media since July 15, 2008</Typography>
        </StyledCard>

        <StyledCard className={classes.postTitle}>
          <Typography variant="h2">Posts</Typography>
        </StyledCard>
      </div>
    </>
  )
}
