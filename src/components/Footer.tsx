import { Stack, Typography } from '@mui/material';

import { Button } from './Button';

const Footer = () => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent="space-between"
    >
      <Stack direction={'row'}>
        <Typography variant="h6">Business Plan</Typography>
        <Typography variant="h6">Videos</Typography>
        <Typography variant="h6">Toolkit</Typography>
        <Typography variant="h6">Podcasts</Typography>
        <Typography variant="h6">Courses</Typography>
      </Stack>
      <Stack direction={'row'}>
        <Button style={{ borderRadius: '20px' }}>
          <Typography variant="h6">Contact</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Footer;
