import { Box, Stack, Typography } from '@mui/material';

import { Image } from '@nextui-org/react';
import { links } from './links';
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
        <Typography color="#fff">Quay Willebroek 37</Typography>
        <Typography color="#fff">B-1000 Brussels</Typography>
        <Typography color="#fff">02 21 22 678</Typography>
      </Stack>

      {links.map((link) => (
        <Stack
          key={link.title}
          spacing={2}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Box margin="1rem 0">
            <Typography variant="h6" fontWeight="bold" color="#fff">
              {link.title}
            </Typography>
          </Box>
          {link.links.map((link) => (
            <Typography color="#fff" key={link}>
              {link}
            </Typography>
          ))}
        </Stack>
      ))}
    </Box>
  );
};
