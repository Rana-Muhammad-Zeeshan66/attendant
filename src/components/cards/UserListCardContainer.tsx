import { Box, Grid } from '@mui/material';
import React from 'react';
import UserListCard from './UserListCard';

const UserListCardContainer = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <UserListCard key={index} cardTitle="Present" userList={[]} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserListCardContainer;
