import React, { useEffect, useContext } from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StyledCard from '../../style/StyledCard';
import { UserContext } from '../../context/UserContext';
import { getUser } from '../../actions/userActions';
import { useAlert } from 'react-alert';
import { withRouter } from 'react-router-dom';

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

function UserProfile({ location }) {
  const classes = useStyles();
  const alert = useAlert();
  const [user, setUser] = useContext(UserContext);

  // Get user id from query string
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    if (!user) {
      getUser(id)
        .then(res => {
          res.success ? setUser(res.user) : alert.error('Something went wrong.');
        })
        .catch(err => {
          console.log(err);
          alert.error('Something went wrong. Please try again later.');
        })
    }
  }, [alert, setUser, user, id]);

  // Wait for getUser request
  if (!user) return null;

  return (
    <>
      <Avatar className={classes.avatar} src={`https://joeschmoe.io/api/v1/${user.id}`} />

      <div className={classes.cards} >
        <StyledCard className={classes.profileCard}>
          <Typography variant="h1">{`${user.firstName} ${user.lastName}`}</Typography>
          <Typography variant="subtitle1" >Member of social media since July 15, 2008</Typography>
        </StyledCard>

        <StyledCard className={classes.postTitle}>
          <Typography variant="h5">Posts</Typography>
        </StyledCard>
      </div>
    </>
  )
}

export default withRouter(UserProfile);