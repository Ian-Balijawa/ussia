import { Box, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Grid } from '@mui/material';
import PlanDetailsCard from '../../components/Cards/PlanDetailsCard';

export default () => {
  const details = [
    {
      title: 'Products and/or services',
      to: '/marketing/products-and-or-services'
    },
    { title: 'Pricing', to: '/marketing/pricing' },
    {
      title: 'Place',
      to: '/marketing/place'
    },
    {
      title: 'Promotion',
      to: '/marketing/promotion'
    },
    {
      title: 'Staff',
      to: '/marketing/staff'
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
          Marketing
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          You now know who your customers and your competitors are. Now it's
          time to delve into your products and/or services. What do you offer?
          At what price? And from which location? Now is the time to place your
          company in the market and inform your target group of your offer.
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
