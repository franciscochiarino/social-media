import React from 'react';
import { Card, CardHeader, CardContent, CardActions, IconButton, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import _ from 'lodash';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 600,
    margin: "1.5rem auto",
    borderRadius: "15px",
    boxShadow: "0px 1px 2px 0px rgba(209,209,209,0.75)"
  }
}));

export default function PostCardContainer({ id, title, body }) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} >

        <CardHeader avatar={ <Avatar src={`https://joeschmoe.io/api/v1/${id}`} /> } title={_.capitalize(title)} titleTypographyProps={{ variant: "subtitle2"}} subheader={new Date().toDateString()} />

        <CardContent>
          <Typography >
            {_.capitalize(body) + '.'}
          </Typography> 
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>

      </Card>
    </>
  )
}
