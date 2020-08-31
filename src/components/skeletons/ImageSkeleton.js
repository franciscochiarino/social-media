import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function ImageSkeleton() {

  return (
    <div>
      <Skeleton variant="rect" width={150} height={150} style={{ margin: '0.6rem'}} />
    </div>
  )
}
