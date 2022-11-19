import { Box, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Grid } from '@mui/material';
import PlanDetailsCard from '../../components/Cards/PlanDetailsCard';

export default () => {
  const details = [
    {
      title: 'Target group Determination',
      to: '/market-analysis/target-group-determination'
    },
    { title: 'Suppliers', to: '/market-analysis/suppliers' },
    {
      title: 'Partners',
      to: '/market-analysis/partners'
    },
    {
      title: 'Trend Analysis',
      to: '/market-analysis/trend-analysis'
    },
    {
      title: 'SWOT Analysis',
      to: '/market-analysis/swot-analysis'
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
          Market analysis
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          Is there a demand for your product and/or service? Why is your offer
          so unique? Which suppliers will be your partners? And what competition
          should you take into account? The answers to these questions determine
          whether your concept will catch on.
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
