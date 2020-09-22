import React, { useState } from 'react';
import { CardHeader, CardContent, CardActions, IconButton, Typography, Avatar, TextField } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import StyledCard from '../../style/StyledCard';
import { deletePost } from '../../actions/postActions';

// import PostCardSkeleton from '../skeletons/PostCardSkeleton';

const cardHeaderStyle = {
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'center'
}

export default function PostCardContainer({ id, author, date, content, user, updatePosts, setUpdatePosts }) {
  const [editPost, setEditPost] = useState(false);
  const [editPostContent, setEditPostContent] = useState(content);

  // Delete Post
  const handleDeletePostButton = (postId) => {
    deletePost(postId)
      .then(() => setUpdatePosts(!updatePosts))
      .catch(err => alert.error('Something went wrong. Please try again later', { onOpen: () => console.log(err) }));
  };

  return (
      <>
        <StyledCard>

          <div style={cardHeaderStyle}>
            
            {/* Post header */}
            <CardHeader 
              avatar={ <Avatar src={`https://joeschmoe.io/api/v1/${author.id}`} /> } 
              title={`${author.firstName} ${author.lastName}`} 
              titleTypographyProps={{ variant: "h6"}} 
              // FIXME: Display the date properly
              subheader={new Date(date).toLocaleDateString()} 
            />

            {/* Edit/Delete buttons */}
            {user && user.id === author.id ? 
              <div>
                <IconButton aria-label="edit" title="Edit">
                  <EditIcon onClick={() => setEditPost(true)} />
                </IconButton>
                <IconButton aria-label="delete" title="Delete" style={{ marginRight: '0.5rem' }} onClick={() => handleDeletePostButton(id)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            : null }
          </div>

          {/* Post content / Edit post*/}
          <CardContent >
            { editPost ? 
              <form>
                <TextField id='outlined-basic' fullWidth value={editPostContent} onChange={e => setEditPostContent(e.target.value)} />
              </form>
            :
              <Typography variant="body1">
                {content}
              </Typography> 
            }
          </CardContent>
          

          {/* Like/Share buttons */}
          <CardActions disableSpacing>
            <IconButton aria-label="like" title="Like">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" title="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>

        </StyledCard>
      </>
      // <PostCardSkeleton />
  )
}
