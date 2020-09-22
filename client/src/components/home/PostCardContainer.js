import React, { useState, useEffect } from 'react';
import { CardHeader, CardContent, CardActions, IconButton, Typography, Avatar, TextField } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import StyledCard from '../../style/StyledCard';
import { editPost, deletePost } from '../../actions/postActions';
import { useAlert } from 'react-alert';

// import PostCardSkeleton from '../skeletons/PostCardSkeleton';

const cardHeaderStyle = {
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'center'
}

export default function PostCardContainer({ postId, author, date, content, user, likes, updatePosts, setUpdatePosts }) {
  const [postIsBeingEdited, setPostIsBeingEdited] = useState(false);
  const [editPostContent, setEditPostContent] = useState(content);
  const [userLikedPost, setUserLikedPost] = useState(false);
  const alert = useAlert();

  useEffect(() => {
    // Check if user is logged in
    const userId = sessionStorage.getItem('id');

    // Check if user has already liked this post
    if (userId) {
      const likeIndex = likes.findIndex(id => id === userId);
      if (likeIndex) {
        setUserLikedPost(true);
      }
    }
  }, []);

  // Like post
  const handleLikeButton = () => {

    

  };

  // Edit post
  const handleEditPostForm = (e, postId, updatedContent) => {
    e.preventDefault();
    editPost(postId, updatedContent)
      .then(() => {
        setUpdatePosts(!updatePosts);
        // TODO: Put a loading between these two functions so it doesn't look snappy
        setPostIsBeingEdited(false);
      })
      .catch(err => alert.error('Something went wrong. Please try again later', { onOpen: () => console.log(err) }));
  };

  // Delete Post
  const handleDeletePostButton = (postId) => {
    deletePost(postId)
      .then(() => setUpdatePosts(!updatePosts))
      .catch(err => alert.error('Something went wrong. Please try again later', { onOpen: () => console.log(err) }));
  };

  return (
      <>
        <StyledCard>

          {/* Form is created so post can be edited */}
          <form onSubmit={e => handleEditPostForm(e, postId, editPostContent)}>
            <div style={cardHeaderStyle}>

              {/* Avatar, Name and Date */}
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
                  { postIsBeingEdited ?
                    <IconButton aria-label="edit" title="Post" type="submit">
                      <PostAddIcon color="primary" />
                    </IconButton>
                  :
                    <IconButton aria-label="edit" title="Edit" onMouseUp={() => setPostIsBeingEdited(true)}>
                      <EditIcon />
                    </IconButton>
                  }
                  <IconButton aria-label="delete" title="Delete" style={{ marginRight: '0.5rem' }} onClick={() => handleDeletePostButton(postId)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              : null }
            </div>

            {/* Post content / Edit post */}
            <CardContent >
              { postIsBeingEdited ? 
                <TextField id='outlined-basic' fullWidth value={editPostContent} onChange={e => setEditPostContent(e.target.value)} />
              :
                <Typography variant="body1">
                  {content}
                </Typography> 
              }
            </CardContent>
            

            {/* Like / Share buttons */}
            <CardActions disableSpacing>
              <IconButton aria-label="like" title="Like" onClick={handleLikeButton}>
                <FavoriteIcon style={{ color: userLikedPost ? 'red' : 'default' }} />
              </IconButton>
              <IconButton aria-label="share" title="Share">
                <ShareIcon />
              </IconButton>
            </CardActions>

          </form>
        </StyledCard>
      </>
      // <PostCardSkeleton />
  )
}
