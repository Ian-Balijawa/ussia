import { Box, Button, Stack, Typography } from '@mui/material';
import { Eye, Rewind } from 'phosphor-react';

import { COLORS } from '../../constants/colors';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');
  console.log(description);
  return (
    <Box
      spacing={2}
      sx={{
        padding: '1rem 2rem',
        // width: { sx: '100%', sm: '50%' },
        margin: '1em auto'
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{ marginBottom: '1em' }}
        color={COLORS.SECONDARY}
      >
        <Rewind size={32} /> Strategy
      </Stack>
      <Box>
        <Typography
          variant="h5"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          Mission
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          Your mission is pretty much the foundation of everything you do. It's
          why you started. It should inspire your (potential) customers and
          encourage them to purchase your product or service.
        </Typography>
        <Box>
          {visible ? (
            <Typography variant="body2" textAlign="left">
              Your mission statement shows why you do what you do . It therefore
              determines the course of your company. Without a well-defined
              mission, vision and strategy, your company is out of control and
              you will take actions that are not in line with your long-term
              goal. With your mission you know how to convince potential
              partners, investors, employees and other stakeholders to work with
              your company.
            </Typography>
          ) : null}
          <Typography
            variant="body2"
            color={COLORS.PRIMARY}
            sx={{ cursor: 'pointer', margin: '1em 0' }}
            textAlign="left"
            onClick={() => setVisible((visibility) => !visibility)}
          >
            {visible ? (
              <Stack
                direction="row"
                alignItems="center"
                sx={{ marginBottom: '1em', width: '10%' }}
                color={COLORS.PRIMARY}
                spacing={1}
              >
                <Eye size={16} /> Less Info
              </Stack>
            ) : (
              <Stack
                direction="row"
                alignItems="center"
                sx={{ marginBottom: '1em' }}
                color={COLORS.PRIMARY}
                spacing={1}
              >
                <Eye size={16} /> More Info
              </Stack>
            )}
          </Typography>
          <Box>
            <Typography
              variant="body2"
              color={COLORS.SECONDARY}
              textAlign="left"
              sx={{ marginBottom: '1em' }}
            >
              Mission
            </Typography>
            <MDEditor
              value={description}
              onChange={setDescription}
              previewOptions={{
                rehypePlugins: [[rehypeSanitize]]
              }}
            />
            <MDEditor.Markdown
              source={description}
              style={{ whiteSpace: 'pre-wrap' }}
            />
          </Box>
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
        </Box>
      </Box>
    </Box>
  );
};
