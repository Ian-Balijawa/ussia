import '../../assets/css/home.css';

import { Box, Stack, Typography } from '@mui/material';

import { Button } from './JumbotronBtn';
import { COLORS } from '../../constants/colors';
import { Image } from '@nextui-org/react';

export default (props) => {
  const { image, direction } = props;

  return (
    <Stack
      direction={{ xs: 'column', md: direction }}
      justifyContent="center"
      alignItems={{ xs: 'flex-start', md: 'center' }}
      width="100%"
      margin={{ xs: '1em auto', md: '2em auto' }}
    >
      <Box width={{ xs: '100%', md: '50%' }} height="50%">
        <Image src={image} height={600} width={500} alt="jumbotron image" />
      </Box>

      <Box width={{ xs: '100%', md: '30%' }}>
        <Typography
          variant="h2"
          color={COLORS.SECONDARY}
          fontWeight="bold"
          marginBottom="0.5em"
        >
          From idea to company with the Starters platform
        </Typography>
        <Typography variant="body2">
          Are you thinking about starting your own business? Start at the
          beginning: pour your idea into a business plan. The Starters Platform
          helps you to write out your plans step by step. You will receive tips
          and advice on the various aspects involved in running your own
          business. And you can be inspired by entrepreneurs and experts who are
          featured in the videos. Thanks to the toolkit you are an m/f/x with a
          plan and you learn to convince your (future) customers even better.
          And that completely free.
        </Typography>

        <Button>Get Started</Button>
      </Box>
    </Stack>
  );
};
