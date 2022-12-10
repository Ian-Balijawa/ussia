import { Box, Stack, Typography } from '@mui/material';

import { Button } from '../CustomBtn';
import { COLORS } from '../../constants/colors';
import { Image } from '@nextui-org/react';
import img from '../../assets/images/person1.png';

export default (props) => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
      margin={{ xs: '1em auto', md: '2em auto' }}
    >
      <Image src={'https://picsum.photos/600/600'} alt="jumbotron image" />

      <Box width={{ xs: '100%', md: '35%' }} padding="1rem" spacing={3}>
        <Typography
          variant="h5"
          color={COLORS.SECONDARY}
          fontWeight="bold"
          marginBottom="1.5em"
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: COLORS.PRIMARY
            }
          }}
        >
          As an employer, can I still request a sick note from my sick employee?
        </Typography>
        <Typography variant="body1">
          What can I do with the fine for non-compliance with the identification
          obligation for legal persons in the event of a traffic violation?
        </Typography>

        <Button>View all advisory posts</Button>
      </Box>
    </Stack>
  );
};
