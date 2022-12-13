import * as React from 'react';

import Box from '@mui/material/Box';
import { Loading } from '@nextui-org/react';
import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/material';

const SkeletonContainer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#121212',
        p: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        variant="rectangular"
        width={210}
        height={118}
      />
    </Box>
  );
};
export default () => {
  return (
    <Stack
      justifyContent="center"
      width="100vh"
      height="100vh"
      alignItems="center"
    >
      <Loading type="gradient" size="xl" />
    </Stack>
  );
};
