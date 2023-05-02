import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';

interface UserListCardProps {
  userImage: string;
  username: string;
  userPosition: string;
}

const CarduserInfo = (props: UserListCardProps): JSX.Element => {
  const { userImage, username, userPosition } = props;
  return (
    <Stack direction="row" spacing={2} style={{ marginBottom: '14px' }}>
      <Avatar alt="Remy Sharp" src={userImage} />

      <Stack direction="column">
        <Typography className="card-username">{username}</Typography>
        <Typography className="card-userposition" color="text.secondary">
          {userPosition}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CarduserInfo;
