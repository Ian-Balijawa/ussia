import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import { COLORS } from '../../constants/colors';
import { Eye } from 'phosphor-react';
import Layout from './Layout';
import { ListItem } from '../people-and-organisation/enterprenuer-competencies';
import MDEditor from '@uiw/react-md-editor';
import ReactPlayer from 'react-player';
import rehypeSanitize from 'rehype-sanitize';

export default () => {
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');
  console.log(description);
  return (
    <Stack direction="row">
      <Layout
        subtitle="Mission"
        description="Your mission is pretty much the foundation of everything you do. It's why you started. It should inspire your (potential) customers and encourage them to purchase your product or service."
      >
        <Box spacing={2}>
          <Box>
            {visible ? (
              <Typography variant="body2" textAlign="left">
                Your mission statement shows why you do what you do . It
                therefore determines the course of your company. Without a
                well-defined mission, vision and strategy, your company is out
                of control and you will take actions that are not in line with
                your long-term goal. With your mission you know how to convince
                potential partners, investors, employees and other stakeholders
                to work with your company.
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
          </Box>
        </Box>
      </Layout>
      <InfoSection />
    </Stack>
  );
};

export const InfoSection = () => {
  const tips = [
    'Be sure to tell what your company stands for in your mission statement',
    'Show why your company exists',
    'Knows how to convince potential investors and partners'
  ];

  return (
    <Stack
      width="30%"
      sx={{ margin: '1em auto', display: { xs: 'none', md: 'block' } }}
    >
      <Typography variant="body1" color="#E03C31" fontWeight="bold">
        Three ultimate tips for a strong mission
      </Typography>
      <Box margin="1rem 0">
        {tips.map((tip) => (
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
        isLink={true}
        styles={{ margin: '0 1rem 0 0' }}
        item="Get started with your missing, vision and strategy"
      />
      <ReactPlayer
        width="400px"
        url="https://youtu.be/rEYWpVgaP-M"
        fallback={<Skeleton variant="rectangular" width={500} />}
      />
    </Stack>
  );
};
