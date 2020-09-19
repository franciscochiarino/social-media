import React, { useEffect, useState } from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StyledCard from '../../style/StyledCard';
import { getUser } from '../../actions/userActions';
import { useAlert } from 'react-alert';
import { withRouter } from 'react-router-dom';
import PostCardContainer from '../home/PostCardContainer';

const useStyles = makeStyles(() => ({
  avatar: {
    width: '170px',
    height: '170px',
    position: 'relative',
    margin: '0 auto',
    top: '40px',
    zIndex: 1
  },
  cards: {
    position: 'relative',
    top: '-70px'
  },
  profileCard: {
    textAlign: 'center',
    padding: '6rem 0 2rem 0',
  },
  postTitle: {
    textAlign: 'center',
    padding: '0.5rem 0',
    marginBottom: '0',
  }
}));

function UserProfile({ location, user, posts, updatePosts, setUpdatePosts }) {
  const classes = useStyles();
  const alert = useAlert();
  const [profile, setProfile] = useState(null);

  // Get user id from query string
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    getUser(id)
      .then(res => {
        res.success ? setProfile(res.user) : alert.error('Something went wrong.');
      })
      .catch(err => {
        console.log(err);
        alert.error('Something went wrong. Please try again later.');
      })
  }, [alert, setProfile, id]);

  const renderPosts = posts.map(({ _id, author, date, content }) => {
    return (
      <PostCardContainer key={_id} id={_id} author={author} content={content} date={date} user={user} updatePosts={updatePosts} setUpdatePosts={setUpdatePosts} />
    )
  });

  // Wait for getUser request
  if (!profile) return null;

  return (
    <>
      <Avatar className={classes.avatar} src={`https://joeschmoe.io/api/v1/${profile.id}`} />

      <div className={classes.cards} >
        <StyledCard className={classes.profileCard}>
          <Typography variant="h1">{`${profile.firstName} ${profile.lastName}`}</Typography>
          <Typography variant="subtitle1" >Member of social media since July 15, 2008</Typography>
        </StyledCard>

        <StyledCard className={classes.postTitle}>
          <Typography variant="h5">Posts</Typography>
        </StyledCard>

        {renderPosts}
      </div>

    </>
  )
}

export default withRouter(UserProfile);