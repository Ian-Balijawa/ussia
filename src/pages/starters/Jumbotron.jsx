import { Box, Stack, Typography } from '@mui/material';

import { Button } from '../../components/CustomBtn';

export default (props) => {
  const { image, title, description, action, direction } = props;
  return (
    <Stack
      direction={{ xs: 'column', md: direction }}
      justifyContent="flex-start"
      alignItems="flex-start"
      margin="1rem auto"
      width="80%"
    >
      <img src={image} alt="jumbotron image" width="100%" />

      <Box
        width={{ xs: '100%', md: '100%' }}
        padding={{ xs: '1em', md: '1em auto' }}
      >
        <Typography variant="h5" fontWeight="bold" marginBottom="0.5em">
          {title}
        </Typography>
        <Typography margin="1rem 0" variant="body2">
          {description}
        </Typography>
        <Button>{action}</Button>
      </Box>
    </Stack>
  );
};
