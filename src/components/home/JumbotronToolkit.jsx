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
          Start your business successfully with the toolkit
        </Typography>
        <Typography variant="body2">
          Your business has the greatest chance of success if you prepare well.
          Our toolkit is packed with 'tools' to help you with all your
          questions, such as: how do you convert your strategy into an action
          plan? How does your offer reach the right target group? Is your
          website ready? How do you convert a strategy into concrete action
          points and objectives? With our tools you are on the right path
          towards success.
        </Typography>

        <Button>View the tools</Button>
      </Box>
    </Stack>
  );
};
