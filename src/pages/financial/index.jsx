import { Box, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Grid } from '@mui/material';
import PlanDetailsCard from '../../components/Cards/PlanDetailsCard';

export default () => {
  const details = [
    {
      title: 'Sales forecast',
      to: '/financial/sales-forecast'
    },
    { title: 'Investments', to: '/financial/investments' },
    {
      title: 'Financing',
      to: '/financial/financing'
    },
    {
      title: 'Break Even Sales',
      to: '/financial/break-even-sales'
    },
    {
      title: 'Cash Planning',
      to: '/financial/cash-planning'
    },
    {
      title: 'Feasibility Test and Conclusion',
      to: '/financial/feasibility-test-and-conclusion'
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
          Financial
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          A financial plan is crucial to determine whether your business has a
          chance of success. Because without money, unfortunately you won't get
          there. And it is the intention that you can also live on your income.
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          Based on your fixed and variable costs, we calculate the turnover you
          need to make to cover the costs: the break-even turnover. Finally, we
          look at whether this break-even turnover is feasible for your company.
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
