import React from 'react';
import { CardHeader, CardContent, CardActions, IconButton, Typography, Avatar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import StyledCard from '../../style/StyledCard';

export default function PostCardContainer({ author, content }) {

  return (
    <>
      <StyledCard >

        <CardHeader 
          avatar={ <Avatar src={`https://joeschmoe.io/api/v1/${author.id}`} /> } 
          title={author} 
          titleTypographyProps={{ variant: "h6"}} 
          subheader={new Date().toDateString()} 
        />

        <CardContent >
          <Typography variant="body1">
            {content}
          </Typography> 
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="like">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>

      </StyledCard>
    </>
  )
}
