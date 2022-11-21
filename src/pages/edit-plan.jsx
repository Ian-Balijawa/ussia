import {
  ChartLineUp,
  Clock,
  CurrencyDollar,
  Horse,
  List,
  Megaphone,
  ProjectorScreenChart,
  SquaresFour,
  Sun,
  VideoCamera
} from 'phosphor-react';

import Box from '@mui/material/Box';
import ContentCard from '../components/Cards/ContentCard';
import Grid from '@mui/material/Grid';
import Logo from '../assets/svgs/Logo.svg';
import { useEffect } from 'react';

export default () => {
  useEffect(() => {}, []);

  const phases = [
    {
      title: 'Idea',
      image: <Sun size={32} />,
      content: ['Description', 'Your Pitch', 'Strengths and Weaknesses']
    },
    {
      title: 'Strategy',
      image: <Horse size={32} />,
      content: ['Mission', 'Vision', 'Action Plan']
    },
    {
      title: 'Market Analysis',
      image: <ChartLineUp size={32} />,
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
      image: <Clock size={32} />,
      content: [
        'Form and Social Status',
        'Schedule',
        'Enterpreneur Competencies'
      ]
    },
    {
      title: 'Marketing',
      image: <Megaphone size={32} />,
      content: [
        'Products and or Services',
        'Pricing',
        'Placing',
        'Promotion',
        'Staff'
      ]
    },
    {
      title: 'Financial',
      image: <CurrencyDollar size={32} />,
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
      image: <ProjectorScreenChart size={32} />,
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
    <Box sx={{ flexGrow: 1, margin: '3em' }}>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
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
