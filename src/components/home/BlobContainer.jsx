import { Stack, Typography } from '@mui/material';

import { Blob } from 'react-blob';
import { COLORS } from '../../constants/colors';

const BackgroundBlob = ({ children, style, props }) => (
  <Blob
    animationDuration="0"
    size="15rem"
    style={{
      zIndex: -1,
      backgroundColor: '#E8EEF4',
      color: 'white',
      display: 'block',
      ...style
    }}
    {...props}
  >
    {children}
  </Blob>
);

export default () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      width="100%"
      spacing={3}
    >
      <BackgroundBlob>
        <Stack direction="column" textAlign="center" spacing={3}>
          <Typography variant="h5" fontWeight="bold" color={COLORS.PRIMARY}>
            +25000
          </Typography>
          <Typography variant="body2">users</Typography>
        </Stack>
      </BackgroundBlob>
      <BackgroundBlob>
        <Stack direction="column" textAlign="center" spacing={3}>
          <Typography variant="h5" fontWeight="bold" color={COLORS.PRIMARY}>
            +20000
          </Typography>
          <Typography variant="body2">business plans</Typography>
        </Stack>
      </BackgroundBlob>
      <BackgroundBlob>
        <Stack direction="column" textAlign="center" spacing={3}>
          <Typography variant="h5" fontWeight="bold" color={COLORS.PRIMARY}>
            +60
          </Typography>
          <Typography variant="body2">educational videos</Typography>
        </Stack>
      </BackgroundBlob>
      <BackgroundBlob>
        <Stack direction="column" textAlign="center" spacing={3}>
          <Typography variant="h5" fontWeight="bold" color={COLORS.PRIMARY}>
            +10
          </Typography>
          <Typography variant="body2">useful tools</Typography>
        </Stack>
      </BackgroundBlob>
    </Stack>
  );
};
