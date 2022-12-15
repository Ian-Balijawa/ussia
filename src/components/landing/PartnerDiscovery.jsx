import { Box, Stack, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Image } from '@nextui-org/react';
import React from 'react';
import kbc from '../../assets/images/kbc.png';
import liaintis from '../../assets/images/liantis.png';

export default () => {
  return (
    <React.Fragment>
      <Typography
        variant="h5"
        color={COLORS.SECONDARY}
        fontWeight="bold"
        align="center"
        margin="1em 0"
        sx={{
          cursor: 'pointer',
          margin: '3rem auto',
          '&:hover': { color: COLORS.PRIMARY }
        }}
      >
        Discover our partners
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Stack
          spacing={5}
          margin="1rem 0"
          alignItems={'center'}
          justifyContent="center"
          direction={{ xs: 'column', md: 'row' }}
        >
          <Image src={liaintis} alt="partners" />
          <Image src={kbc} alt="partners" />
        </Stack>
      </Stack>
    </React.Fragment>
  );
};
