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
        <Rewind size={32} /> Idea
      </Stack>
      <Box>
        <Typography
          variant="h5"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          Description
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          When do you know your idea is good? Tell your friends or family.
          Explain how you want to market it. Do they understand you right away?
          Then your description is clear. Do you notice that they are not with
          your story? Ask why and what they are missing. Continue writing your
          idea until the whole story is correct.
        </Typography>
        <Box>
          {visible ? (
            <Box
              spacing={1}
              sx={{
                background: COLORS.SECONDARY,
                padding: '1rem',
                borderRadius: '5px'
              }}
            >
              <Typography
                variant="h6"
                color={'#ffff'}
                textAlign="left"
                sx={{ margin: '0.3em 0' }}
              >
                This is how Edelweiss approached it:
              </Typography>
              <Typography variant="body2" color={'#ffff'} textAlign="left">
                I call my business a feel-good bar because I want to create a
                place where everyone feels good and at home. This feel-good
                moment is filled in a different way for everyone. For some, this
                feel-good moment consists of picking up a juice in the store.
                For others from stopping by and enjoying a fresh bowl of soup.
                Another reason why I don't want to call my business a juice or
                soup bar is because I don't want to be tied to a specific
                product category.
              </Typography>
            </Box>
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
                <Eye size={16} /> Hide example
              </Stack>
            ) : (
              <Stack
                direction="row"
                alignItems="center"
                sx={{ marginBottom: '1em' }}
                color={COLORS.PRIMARY}
                spacing={1}
              >
                <Eye size={16} /> Show example
              </Stack>
            )}
          </Typography>
          <Box>
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
