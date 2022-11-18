import { Box, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Grid } from '@mui/material';
import PlanDetailsCard from '../../components/Cards/PlanDetailsCard';

export default () => {
  const details = [
    { title: 'Description', to: '/idea/description' },
    { title: 'Pitch', to: '/idea/pitch' },
    {
      title: 'Strengths and Weaknesses',
      to: '/idea/strengths-and-weaknesses'
    }
  ];
  return (
    <Box
      sx={{
        padding: '1rem 2rem',
        width: { sx: '100%', sm: '50%' },
        height: '100vh'
      }}
      spacing={2}
    >
      <Box>
        <Typography
          variant="h5"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          Idea
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          Do you have a desire to do business? Then it is now time to turn that
          good idea into a punishment plan. Think about it carefully, because
          this is where you build the foundation of your entire business plan.
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {details.map((detail) => (
              <Grid item xs={2} sm={4} md={4} key={detail.title}>
                <PlanDetailsCard title={detail.title} to={detail.to} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
