import Box from '@mui/material/Box';
import ContentCard from '../components/Cards/ContentCard';
import Grid from '@mui/material/Grid';
import Logo from '../assets/svgs/Logo.svg';
import { Stack } from '@mui/material';
import { useEffect } from 'react';

export default () => {
  useEffect(() => {}, []);

  const phases = [
    {
      title: 'Idea',
      image: Logo,
      content: ['Description', 'Your Pitch', 'Strengths and Weaknesses']
    },
    {
      title: 'Strategy',
      image: Logo,
      content: ['Mission', 'Vision', 'Action Plan']
    },
    {
      title: 'Market Analysis',
      image: Logo,
      content: [
        'Target Group Determination',
        'Suppliers',
        'Competitors',
        'Partners',
        'Competitors',
        'Trend Analysis',
        'SWOT Analysis'
      ]
    },
    {
      title: 'People & Organization',
      image: Logo,
      content: [
        'Form and Social Status',
        'Schedule',
        'Enterpreneur Competencies'
      ]
    },
    {
      title: 'Marketing',
      image: Logo,
      content: [
        'Products and/or Services',
        'Pricing',
        'Placing',
        'Promotion',
        'Staff'
      ]
    },
    {
      title: 'Financial',
      image: Logo,
      content: [
        'Sales forecast',
        'Investments',
        'financing',
        'Break even sales',
        'Cash planning',
        'Feasibility test & conclusion'
      ]
    },
    {
      title: 'Start-up',
      image: Logo,
      content: [
        'Company data',
        'Personal data',
        'Business bank account',
        'Enterprise number',
        'Health insurance fund',
        'USSIA membership'
      ]
    }
  ];
  return (
    <Box
      sx={{
        flexGrow: 1
        // margin: '2em'
      }}
    >
      <Grid
        container
        // spacing={{ xs: 2, md: 4 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {phases.map((phase) => (
          <Grid item xs={2} sm={4} md={4} key={phase.title}>
            <ContentCard key={phase.title} phase={phase} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
