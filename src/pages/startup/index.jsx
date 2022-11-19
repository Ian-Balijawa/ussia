import { Box, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Grid } from '@mui/material';
import PlanDetailsCard from '../../components/Cards/PlanDetailsCard';

export default () => {
  const details = [
    { title: 'Company Data', to: '/startup/company-data' },
    { title: 'Personal Data', to: '/startup/personal-data' },
    { title: 'Business Bank account', to: '/startup/business-bank-account' },
    {
      title: 'Enterprise number',
      to: '/startup/enterprise-number'
    },
    {
      title: 'Health Insurance fund',
      to: '/startup/health-insurance-fund'
    },
    {
      title: 'USSIA membership',
      to: '/startup/ussia-membership'
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
          Startup
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          You are in the last straight line: one more spurt and you are an
          entrepreneur. You now have a strong business plan and a well-developed
          financial plan. Together we will go over all your data so that you are
          completely ready to apply for a company number.
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
