import { Loading } from '@nextui-org/react';
import { Stack } from '@mui/material';
export default () => {
  return (
    <Stack
      justifyContent="center"
      width="100%"
      height="100vh"
      alignItems="center"
    >
      <Loading type="gradient" />
    </Stack>
  );
};
