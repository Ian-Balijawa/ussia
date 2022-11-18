import { Box, Button, Stack, Typography } from '@mui/material';
import { Eye, Rewind } from 'phosphor-react';

import { COLORS } from '../../constants/colors';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import { useState } from 'react';

export default () => {
  const [textVisible, setTextVisible] = useState(false);
  const [boxVisible, setBoxVisible] = useState(false);
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
          Action Plan
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          You have already set a clear goal and a clear vision for the future.
          Now describe in your action plan how you will propagate that mission
          and vision in your company, how you will achieve your goals.s?" . Also
          think about where you are working towards with your company.
        </Typography>
        {textVisible ? (
          <Typography variant="body2" textAlign="left">
            Also describe what the most important assets are to attract and
            retain customers: how do you distinguish yourself from your
            competitors?
          </Typography>
        ) : null}
        <Typography
          variant="body2"
          color={COLORS.PRIMARY}
          sx={{ cursor: 'pointer', margin: '1em 0' }}
          textAlign="left"
          onClick={() => setTextVisible((visibility) => !visibility)}
        >
          {textVisible ? (
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
          {boxVisible ? (
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
                Example of an already started company :
              </Typography>
              <Typography variant="body2" color={'#ffff'} textAlign="left">
                provide a beautiful decoration of my institute, so that
                customers who enter know that they end up in a professional
                environment. posting on Facebook/Instagram where I mainly focus
                on posts about skin improvement in order to build expertise;
                speaking in the breast clinic; speaking at the fourty-one
                (service club about the new trend in skin care, especially
                epigenetics and possible skin problems); giving workshops about
                facial care and the importance of proper care; word of mouth
                advertising; I know someone who writes for a local newspaper,
                I'm going to try and get an article on skin care for people with
                cancer;
              </Typography>
            </Box>
          ) : null}
          <Typography
            variant="body2"
            color={COLORS.PRIMARY}
            sx={{ cursor: 'pointer', margin: '1em 0' }}
            textAlign="left"
            onClick={() => setBoxVisible((visibility) => !visibility)}
          >
            {boxVisible ? (
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
