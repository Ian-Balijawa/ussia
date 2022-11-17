import { Box, Divider, Stack, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Image } from '@nextui-org/react';

export default ({ phase }) => {
  const { title, content, image } = phase;
  return (
    <Box
      sx={{
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        color: COLORS.SECONDARY,
        margin: '2em auto',
        maxWidth: '50%',
        minHeight: '15em'
      }}
      padding={2}
    >
      <Stack direction="row" margin="1em auto">
        <Image src={image} width={32} height={32} />
        <Typography variant="h6" color={COLORS.SECONDARY}>
          {title}
        </Typography>
      </Stack>
      {content.map((paragraph) => (
        <>
          <Typography
            variant="body2"
            color={COLORS.SECONDARY}
            sx={{ cursor: 'pointer' }}
          >
            {paragraph}
          </Typography>
          {paragraph !== content[content.length - 1] && <Divider />}
        </>
      ))}
    </Box>
  );
};
