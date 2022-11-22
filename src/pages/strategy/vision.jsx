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
          Vision
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          Your vision shows where you want to grow, ask yourself the following
          question: "What will my life look like in 5 years?" . Also think about
          where you are working towards with your company.
        </Typography>
        {textVisible ? (
          <Typography variant="body2" textAlign="left">
            Your vision describes where you see yourself within a number of
            years . Usually we keep in mind a time span of 3 to 5 years. A
            vision is a measurable objective and it plays a crucial role in the
            direction of your company. So your vision describes what you want to
            achieve, while your strategy determines what you need to do to get
            there.
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
                Long term vision: After 1 year: from secondary occupation to
                main occupation with a minimum NBI of 1500 euros per month After
                1.5 years: introduction make-up line After 2 years: introduction
                of 2nd care line After 3 years: opening of 2nd case After 5
                years: expanding the first business with a wellness area
                Short-term vision: Q1: customer portfolio *150%, of which 20%
                regular customers. Q2: customer portfolio *150%, of which 25%
                regular customers. Q3: be able to get the first wage of minimum
                800 euros NBI from the business. Q4: Care line sales must be at
                least 30% of my turnover
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