import { Stack, Typography } from '@mui/material';

import { Button } from '../../components/CustomBtn';

export default ({ title, description, action }) => {
  return (
    <Stack
      padding="1rem"
      justifyContent="space-around"
      alignItems="center"
      margin="1rem 0"
      width="18em"
      height={{
        xs: 'auto',
        md: title === 'Info sessions about starting' ? '20rem' : '15rem'
      }}
      sx={{ border: '1px solid #E8EEF0', borderRadius: '0.3rem' }}
    >
      <Typography variant="h5" margin="0.3em 0">
        {title}
      </Typography>
      <Typography variant="body1" margin="0.3em 0">
        {description}
      </Typography>
      <Button>{action}</Button>
    </Stack>
  );
};
