import { Box, Stack, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Image } from '@nextui-org/react';

export default (props) => {
  const { image, title, description } = props;

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="flex-start"
      alignItems="flex-start"
      margin="1rem"
    >
      <Box width={{ xs: '100%', md: '50%' }} height="50%">
        <Image src={image} alt="jumbotron image" />
      </Box>

      <Box
        width={{ xs: '100%', md: '100%' }}
        padding={{ xs: '1em', md: '1em auto' }}
      >
        <Typography
          variant="h5"
          color={COLORS.SECONDARY}
          fontWeight="bold"
          marginBottom="0.5em"
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: COLORS.PRIMARY
            }
          }}
        >
          {title || 'Listen to inspiring podcasts'}
        </Typography>
        <Typography variant="body2">
          {description ||
            "As a new entrepreneur you are immediately busy. A lot is coming at you... That's why relaxing is all the more important. If you can't let go of your business completely, there are always very interesting podcasts to follow. Here on the platform we have already made a collection of a few podcast series full of inspiration, entrepreneurial stories, interesting tips and valuable advice from experts and fellow entrepreneurs."}
        </Typography>
      </Box>
    </Stack>
  );
};
