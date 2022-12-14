import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import Layout from '../Layout';
import { ListItem } from '../../people-and-organisation/enterprenuer-competencies';
import ReactPlayer from 'react-player';
import Stepper from './Stepper';

export default () => {
  const subtitle = 'Suppliers';
  const description =
    'If you choose a certain supplier, this means that you support his or her company and therefore also support this story. So be critical when choosing suppliers. Ask yourself whether they hold the same values ​​and standards as you do. ';
  const [currentVideoUrl, setCurrentVideoUrl] = useState(
    'https://youtu.be/rEYWpVgaP-M'
  );
  const videoUrls = [
    'https://www.youtube.com/watch?v=2Z4m4lnjxkY',
    'https://youtu.be/rEYWpVgaP-M'
  ];

  const showNextVideo = () => {
    const currentIndex = videoUrls.indexOf(currentVideoUrl);
    if (currentIndex === videoUrls.length - 1) {
      setCurrentVideoUrl(videoUrls[0]);
    } else {
      setCurrentVideoUrl(videoUrls[currentIndex + 1]);
    }
  };

  const showPreviousVideo = () => {
    const currentIndex = videoUrls.indexOf(currentVideoUrl);
    if (currentIndex === 0) {
      setCurrentVideoUrl(videoUrls[videoUrls.length - 1]);
    } else {
      setCurrentVideoUrl(videoUrls[currentIndex - 1]);
    }
  };
  return (
    <Stack direction="row">
      <Layout description={description} subtitle={subtitle}>
        <Stack>
          <Stepper />
        </Stack>
      </Layout>
      <InfoSection
        currentVideoUrl={currentVideoUrl}
        showNextVideo={showNextVideo}
        showPreviousVideo={showPreviousVideo}
      />
    </Stack>
  );
};

export const InfoSection = () => {
  const tips = [
    'Prepare thoroughly.',
    'Decide in advance what you want to achieve.',
    'Consciously place your proposal higher than where you want to end up.',
    'Negotiate step by step.',
    'Stay professional and avoid emotional discussions.'
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
        How to negotiate: 5 tips
      </Typography>
      {tips.map((tip, index) => (
        <React.Fragment key={tip}>
          <ListItem item={tip} />
          <Divider orientation="horizontal" flexItem />
        </React.Fragment>
      ))}
      <Box margin="1rem 0">
        <Typography
          variant="body1"
          margin="1rem 0 0 0"
          color="#E03C31"
          fontWeight="bold"
        >
          Handy link
        </Typography>
      </Box>
      <React.Fragment>
        <ListItem item={'Discover starters in your area'} isLink={true} />
        <Divider orientation="horizontal" flexItem />
      </React.Fragment>
      <Typography color="#E03C31" fontWeight="bold" margin="1rem 0">
        Related Videos
      </Typography>

      <ReactPlayer
        width="100%"
        url="https://youtu.be/rEYWpVgaP-M"
        fallback={<Skeleton variant="rectangular" width={500} />}
      />
      <Typography variant="body1" margin="1rem 0 0 0">
        Not sure where to start with your market research? Discover our tips
        here.
      </Typography>
    </Stack>
  );
};
