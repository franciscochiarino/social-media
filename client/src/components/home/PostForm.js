import React from 'react';
import StyledCard from '../../style/StyledCard';
import StyledButton from '../../style/StyledButton';
import { CardHeader, Avatar, TextField } from '@material-ui/core';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 0',
}

const postButtonStyle = {
  borderRadius: '0px 0px 15px 15px',
}

export default function PostForm() {
  return (
    <StyledCard>
      <form>
        <div style={divStyle} >
          <CardHeader avatar={ <Avatar src={`https://joeschmoe.io/api/v1/1234`} /> } />
          <TextField id='outlined-basic' multiline style={{width: '80%'}} placeholder="What's on your mind, userName?" />
        </div>
        <div>
          <StyledButton fullWidth color='primary' style={postButtonStyle}>POST</StyledButton>
        </div>
      </form>

    </StyledCard>
  )
}
