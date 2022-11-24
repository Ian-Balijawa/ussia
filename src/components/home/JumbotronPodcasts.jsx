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
          Listen to inspiring podcasts
        </Typography>
        <Typography variant="body2">
          As a new entrepreneur you are immediately busy. A lot is coming at
          you... That's why relaxing is all the more important. If you can't let
          go of your business completely, there are always very interesting
          podcasts to follow. Here on the platform we have already made a
          collection of a few podcast series full of inspiration,
          entrepreneurial stories, interesting tips and valuable advice from
          experts and fellow entrepreneurs.
        </Typography>

        <Button>Listen to the podcasts</Button>
      </Box>
    </Stack>
  );
};
