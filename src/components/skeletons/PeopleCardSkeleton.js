import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    height: 72,
    margin: '0.8rem auto',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 1px 2px 0px rgba(209,209,209,0.75)',
    padding: '0 1rem' 
  },
  skeletonHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  skeletonButtons: {
    display: 'flex',
    alignItems: 'center',
  }
})

export default function PeopleCardSkeleton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.skeletonHeader}>
        <Skeleton variant="circle" width={50} height={50} />
        <Skeleton variant="text" width={120} height={25} style={{ marginLeft: '0.8rem' }} />
      </div>
      <div className={classes.skeletonButtons}>
        <Skeleton variant="text" width={100} height={45} style={{ marginRight: '0.8rem'}} />
        <Skeleton variant="text" width={70} height={45} style={{ marginRight: '0.5rem'}} />
      </div>
    </div>
  )
}
