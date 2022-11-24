// import '../../assets/css/home.css';

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
          Work on your business plan with the help of our courses
        </Typography>
        <Typography variant="body2">
          A business plan includes all matters that are discussed from the
          elaboration of your idea to the actual start-up of your company. This
          takes a lot of time, but you also need the necessary knowledge to work
          out all the parts as well as possible. With these courses we provide
          the necessary guidance and information so that you can start your
          entrepreneurial adventure with a well-developed plan. Each course
          consists of several chapters, so don't miss any!
        </Typography>

        <Button>Go to the courses</Button>
      </Box>
    </Stack>
  );
};
