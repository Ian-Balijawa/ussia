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
          variant="h5"
          color={COLORS.PRIMARY}
          fontWeight="bold"
          marginBottom="0.5em"
        >
          More than 60 inspiring videos
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          marginBottom="0.5em"
        >
          On the Starters Platform you will learn everything about how to start
          a business. In short, clear videos, our experts share many valuable
          tips so that you can get started yourself
        </Typography>
        <Typography variant="body2">
          Turn your business idea into a real plan. Discover how marketing can
          boost your future business. Learn more about the financial aspect of
          your business.
        </Typography>

        <Button>Watch the videos</Button>
      </Box>
    </Stack>
  );
};
