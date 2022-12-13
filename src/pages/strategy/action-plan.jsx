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
  return (
    <Stack direction="row">
      <Layout
        subtitle="Action Plan"
        description="You have already set a clear goal and a clear vision for the future. Now describe in your action plan how you will propagate that mission and vision in your company, how you will achieve your goals."
      >
        <Box spacing={2}>
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
                  provide a beautiful decoration of my institute, so that
                  customers who enter know that they end up in a professional
                  environment. posting on Facebook/Instagram where I mainly
                  focus on posts about skin improvement in order to build
                  expertise; speaking in the breast clinic; speaking at the
                  fourty-one (service club about the new trend in skin care,
                  especially epigenetics and possible skin problems); giving
                  workshops about facial care and the importance of proper care;
                  word of mouth advertising; I know someone who writes for a
                  local newspaper, I'm going to try and get an article on skin
                  care for people with cancer;
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
  const characteristics = [
    "It's clearly defined",
    'The result is measureable',
    'It indicates what resources you need',
    'It fits within your mission and it contributes to your vision'
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
        A good strategy has four characteristics:
      </Typography>

      <Box margin="1rem 0">
        {characteristics.map((tip) => (
          <React.Fragment>
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
        Record your goals with the Balanced Scorecard
      </Typography>
    </Stack>
  );
};
