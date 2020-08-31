import React from 'react';
import { Card, CardHeader, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    fontFamily: 'Poppins, sans-serif',
    marginRight: '0.8rem',
    borderRadius: '8px',
    fontSize: '0.8rem',
  }
}));

export default function PeopleCardContainer({ id, name }) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} >
        <CardHeader avatar={ <Avatar src={`https://joeschmoe.io/api/v1/${id}`} /> } title={name} />
        <div className={classes.btnContainer} >
          <Button size="small" className={classes.btn} variant="contained" color="secondary">View Profile</Button>
          <Button size="small" className={classes.btn} variant="contained" color="primary">Follow</Button>
        </div>
      </Card>
    </>
  )
}
