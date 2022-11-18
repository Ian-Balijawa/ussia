import { Stack, Typography } from '@mui/material';

import { Image } from '@nextui-org/react';

export default ({ name, imagesrc }) => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      sx={{
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        borderRadius: '4px',
        padding: '20px',
        width: '100%',
        margin: '0.5em auto',
        cursor: 'pointer'
      }}
    >
      <Image width={95} alt="name" objectFit="cover" src={imagesrc} />
      <Typography variant="body2">{name}</Typography>
    </Stack>
  );
};
