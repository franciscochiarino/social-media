import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '600px',
    height: '242px',
    margin: "1.5rem auto",
    borderRadius: "15px",
    boxShadow: "1px 1px 5px 0px rgba(145,145,145,0.8)"
  },
  skeletonHeader: {
    display: 'flex',
    padding: '0.5rem 0'
  },
  skeletonBody: {
    height: '100px',
    paddingTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  skeletonFooter: {
    display: 'flex',
    paddingTop: '0.8rem',
  }
}));

export default function PostCardSkeleton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.skeletonHeader}>
        <Skeleton variant="circle" width={50} height={50} style={{ marginLeft: '1rem'}} />
        <Skeleton variant="text" width={300} style={{ marginLeft: '1rem'}} />
      </div>
      <div className={classes.skeletonBody}>
        {new Array(3).fill(<Skeleton  variant="rect" width={570} height={20} />)}
      </div> 
      <div className={classes.skeletonFooter}>
        <Skeleton variant="circle" width={40} height={40} style={{ marginLeft: '1rem'}} />
        <Skeleton variant="circle" width={40} height={40} style={{ marginLeft: '0.5rem'}} />
      </div>
    </div>
  )
}
