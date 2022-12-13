import { Eye } from 'phosphor-react';
import { Box, Stack, Typography, Divider, Skeleton } from '@mui/material';

import React, { useState } from 'react';
import { ListItem } from '../people-and-organisation/enterprenuer-competencies';
import ReactPlayer from 'react-player';

import { COLORS } from '../../constants/colors';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import Layout from './Layout';

export default () => {
  const [textVisible, setTextVisible] = useState(false);
  const [boxVisible, setBoxVisible] = useState(false);
  const [description, setDescription] = useState('');
  console.log(description);
  return (
    <Stack direction="row">
      <Layout
        subtitle="Vision"
        description='Your vision shows where you want to grow, ask yourself the following question: "What will my life look like in 5 years?" . Also think about where you are working towards with your company.'
      >
        <Box spacing={2}>
          {textVisible ? (
            <Typography variant="body2" textAlign="left">
              Your vision describes where you see yourself within a number of
              years . Usually we keep in mind a time span of 3 to 5 years. A
              vision is a measurable objective and it plays a crucial role in
              the direction of your company. So your vision describes what you
              want to achieve, while your strategy determines what you need to
              do to get there.
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
                <Eye size={16} color="#E03C31" /> Less Info
              </Stack>
            ) : (
              <Stack
                direction="row"
                alignItems="center"
                sx={{ marginBottom: '1em' }}
                color={COLORS.PRIMARY}
                spacing={1}
              >
                <Eye size={16} color="#E03C31" /> More Info
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
                  main occupation with a minimum NBI of 1500 euros per month
                  After 1.5 years: introduction make-up line After 2 years:
                  introduction of 2nd care line After 3 years: opening of 2nd
                  case After 5 years: expanding the first business with a
                  wellness area Short-term vision: Q1: customer portfolio *150%,
                  of which 20% regular customers. Q2: customer portfolio *150%,
                  of which 25% regular customers. Q3: be able to get the first
                  wage of minimum 800 euros NBI from the business. Q4: Care line
                  sales must be at least 30% of my turnover
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
                  <Eye size={16} color="#E03C31" /> Hide example
                </Stack>
              ) : (
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ marginBottom: '1em' }}
                  color={COLORS.PRIMARY}
                  spacing={1}
                >
                  <Eye size={16} color="#E03C31" /> Show example
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
          </Box>
        </Box>
      </Layout>
      <InfoSection />
    </Stack>
  );
};

export const InfoSection = () => {
  const tips = [
    'Specifically',
    'Measureable',
    'Acceptable',
    'Realistic',
    'Timebound'
  ];

  return (
    <Stack
      width="30%"
      sx={{ margin: '1em auto', display: { xs: 'none', md: 'block' } }}
    >
      <Typography
        variant="body1"
        margin="1rem 0"
        color="#E03C31"
        fontWeight="bold"
      >
        How do you arrive at a vision?
      </Typography>
      <Typography variant="body1">
        Don't be put off if you don't immediately know where you want to be in
        five years. Then start with a vision for year 1, for year 2 and for year
        3. Make sure that your vision is SMART:
      </Typography>
      <Box margin="1rem 0">
        {tips.map((tip) => (
          <React.Fragment key={tip}>
            <ListItem item={tip} />
            <Divider orientation="horizontal" flexItem />
          </React.Fragment>
        ))}
      </Box>

      <Typography
        variant="body1"
        margin="1rem 0 0 0"
        color="#E03C31"
        fontWeight="bold"
      >
        Useful Links
      </Typography>
      <ListItem
        styles={{ margin: '0 1rem 0 0' }}
        item="Get started with your missing, vision and strategy"
      />
      <ReactPlayer
        width="100%"
        url="https://youtu.be/rEYWpVgaP-M"
        fallback={<Skeleton variant="rectangular" width={500} />}
      />
      <Typography variant="body1" margin="1rem 0 0 0">
        Your vision forms the compass, the direction you are going. Make sure it
        is realistic and achievable.
      </Typography>
    </Stack>
  );
};
