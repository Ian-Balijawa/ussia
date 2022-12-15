import { Button } from './CustomBtn';
import { Stack } from '@mui/material';

export default () => {
  return (
    <Stack
      direction="row"
      background="#FFFFFF"
      justifyContent="space-between"
      alignItems="center"
      margin="1rem 0"
    >
      <Button>Back</Button>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        <Button
          style={{
            border: '1px solid #2A424E'
          }}
          type="save"
        >
          Save
        </Button>
        <Button>Further</Button>
      </Stack>
    </Stack>
  );
};
