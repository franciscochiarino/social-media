import React from 'react';
import { Card, CardHeader, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StyledButton from '../../style/StyledButton';
// import PeopleCardSkeleton from '../skeletons/PeopleCardSkeleton';

// Style
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 600,
    margin: '0.8rem auto',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 1px 2px 0px rgba(209,209,209,0.75)',
  },
  btnContainer: {
    padding: '0 0.5rem'
  },
  btn: {
    marginRight: '0.8rem',
  }
}));

export default function PeopleCardContainer({ id, firstName, lastName, user }) {
  const classes = useStyles();

  return (
      user ? (
        user.id !== id ? (
          <>
            <Card className={classes.root} >
              <CardHeader avatar={ <Avatar src={`https://joeschmoe.io/api/v1/${id}`} /> } title={`${firstName} ${lastName}`} />
              <div className={classes.btnContainer} >
                <StyledButton href={`#/profile/${id}`} size="small" className={classes.btn} variant="contained" color="secondary">View Profile</StyledButton>
                <StyledButton size="small" className={classes.btn} variant="contained" color="primary">Follow</StyledButton>
              </div>
            </Card>
          </>
        ) : (null)
      ) : (
        <>
          <Card className={classes.root} >
            <CardHeader avatar={ <Avatar src={`https://joeschmoe.io/api/v1/${id}`} /> } title={`${firstName} ${lastName}`} />
            <div className={classes.btnContainer} >
              <StyledButton href={`#/profile/${id}`} size="small" className={classes.btn} variant="contained" color="secondary">View Profile</StyledButton>
              <StyledButton size="small" className={classes.btn} variant="contained" color="primary">Follow</StyledButton>
            </div>
          </Card>
        </>
      )
      
      // <PeopleCardSkeleton />
  )
}
