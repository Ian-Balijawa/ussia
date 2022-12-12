import { Box, Stack, Typography } from '@mui/material';

import { Image } from '@nextui-org/react';
import logo from '../../../assets/logo.png';

export default () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(6,1fr)' },
        gap: '2',
        padding: '1rem',
        background: '#2D2926'
      }}
    >
      <Stack spacing={2} justifyContent="flex-start" alignItems="flex-start">
        <Image src={logo} width={150} height={100} alt="unizo logo" />
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
      </Stack>
      <Stack spacing={2} justifyContent="center" alignItems="flex-start">
        <Box>
          <Typography color="#fff">Activities</Typography>
        </Box>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
      </Stack>
      <Stack spacing={2} justifyContent="center" alignItems="flex-start">
        <Box>
          <Typography color="#fff">Advocacy</Typography>
        </Box>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
      </Stack>
      <Stack spacing={2} justifyContent="center" alignItems="flex-start">
        <Box>
          <Typography color="#fff">Information & advice</Typography>
        </Box>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
      </Stack>
      <Stack spacing={2} justifyContent="center" alignItems="flex-start">
        <Box>
          <Typography color="#fff">About us</Typography>
        </Box>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
      </Stack>
      <Stack spacing={2} justifyContent="center" alignItems="flex-start">
        <Box>
          <Typography color="#fff">Become a member</Typography>
        </Box>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
        <Typography color="#fff">TitleTitleTitleTitleTitle</Typography>
      </Stack>
    </Box>
  );
};
