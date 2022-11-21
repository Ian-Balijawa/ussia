import { Button } from '../components/Button';
import { Stack } from '@mui/material';
export default () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ margin: '1em auto' }}
    >
      <Button variant="outlined" size="small">
        Back
      </Button>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        <Button variant="outlined" size="small">
          Save
        </Button>
        <Button variant="outlined" size="small">
          Further
        </Button>
      </Stack>
    </Stack>
  );
};
