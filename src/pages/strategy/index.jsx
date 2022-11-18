import { Box, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Grid } from '@mui/material';
import PlanDetailsCard from '../../components/Cards/PlanDetailsCard';

export default () => {
  const details = [
    { title: 'Mission', to: '/strategy/mission' },
    { title: 'Vision', to: '/strategy/vision' },
    {
      title: 'Action Plan',
      to: '/strategy/action-plan'
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
          Strategy
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          If the story surrounding your company is correct, you will be
          unstoppable. Therefore, invest sufficient time in developing your
          mission, vision and action plan. It will help you to always make good
          and well-considered choices.
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
