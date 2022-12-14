import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material';

import Layout from './Layout';
import { ListItem } from '../people-and-organisation/enterprenuer-competencies';
import MDEditor from '@uiw/react-md-editor';
import React from 'react';
import ReactPlayer from 'react-player';
import rehypeSanitize from 'rehype-sanitize';

export default () => {
  const subtitle = 'Trend analysis';
  const description =
    'You now know who your customers, suppliers, competitors and partners are. But other factors also influence your business. You determine these factors with the trend analysis. You will notice that they also play a crucial role in your business plan.';
  const [isVisible, setIsVisible] = React.useState(false);
  const [yourAnalysis, setYourAnalysis] = React.useState('');
  const questions = [
    'Is there movement in the market for your product or service?',
    'Are there trends or evolutions in society that could affect sales?',
    'Do you work with other countries? What is the current economic situation there? Are you going to import products?',
    'Do you sell seasonal products? How do you bridge the other periods?',
    'Do you have a specific target group? Are demographic changes taking place?',
    'How do the current political situations affect your business?'
  ];
  return (
    <Stack direction="row">
      <Layout description={description} subtitle={subtitle}>
        {isVisible && (
          <React.Fragment>
            <Typography variant="body1" margin="1rem 0">
              Take inspiration from these questions:
            </Typography>
            {questions.map((question, index) => (
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                margin="1rem 0"
                key={question}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="#E03C31"
                  margin="0.5rem 0"
                >
                  {index + 1}
                </Typography>
                <Typography variant="body1" margin="0.5rem 0">
                  {question}
                </Typography>
              </Stack>
            ))}
          </React.Fragment>
        )}
        <Typography
          width="fit-content"
          sx={{ cursor: 'pointer', margin: '1em 0', color: '#E03C31' }}
          onClick={() => setIsVisible(!isVisible)}
        >
          {!isVisible ? 'More Info' : 'Less Information'}
        </Typography>
        <Typography width="fit-content" color="#E03C31" margin="1rem 0">
          Your Analysis
        </Typography>

        <Box margin="1rem 0">
          <MDEditor
            value={yourAnalysis}
            onChange={setYourAnalysis}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]]
            }}
          />
          <MDEditor.Markdown
            source={yourAnalysis}
            style={{ whiteSpace: 'pre-wrap' }}
          />
        </Box>
      </Layout>
      <InfoSection />
    </Stack>
  );
};

export const InfoSection = () => {
  const links = [
    {
      title: 'Research and Statistics',
      href: 'https://www.unizo.be/starten'
    },
    {
      title: 'Statbel',
      href: 'https://statbel.fgov.be/en'
    }
  ];

  const tips = [
    'Demographic',
    'Ecological',
    'Socialological',
    'Technological',
    'Economic',
    'Politics'
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
        Discover the opportunities in your environment through a DESTEP
        analysis:
      </Typography>
      {tips.map((tip) => (
        <React.Fragment key={tip}>
          <ListItem item={tip} />
          <Divider orientation="horizontal" flexItem />
        </React.Fragment>
      ))}

      <Typography variant="p" margin="1rem 0">
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          These examples{' '}
        </span>{' '}
        will help you on the right track.
      </Typography>

      <Box margin="1rem 0">
        <Typography
          variant="body1"
          margin="1rem 0 0 0"
          color="#E03C31"
          fontWeight="bold"
        >
          Useful Links
        </Typography>
        {links.map((link) => (
          <React.Fragment key={link.href}>
            <ListItem item={link.title} isLink={true} />
            <Divider orientation="horizontal" flexItem />
          </React.Fragment>
        ))}
      </Box>

      <ReactPlayer
        width="100%"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        fallback={<Skeleton variant="rectangular" width={500} />}
      />
      <Typography variant="body1" margin="1rem 0 0 0">
        Dare to name your strengths and weaknesses and analyze opportunities and
        threats in the market.
      </Typography>
    </Stack>
  );
};
