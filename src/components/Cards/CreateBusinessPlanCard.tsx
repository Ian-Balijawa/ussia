import { Stack, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Link } from 'react-router-dom';

export const CreateBusinessPlanCard = () => {
  return (
    <Link to={'/create-plan'}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        mt={2}
        sx={{
          border: '1px solid #E5E5E5',
          boxShadow: '1px 0px 6px 4px rgb(0 0 0 / 25%)',
          borderRadius: '4px',
          padding: '20px',
          width: 'fit-content',
          margin: '2em auto'
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{
              border: `2px dashed ${COLORS.SECONDARY}`,
              width: '3em',
              height: '3em',
              borderRadius: '100%',
              cursor: 'pointer'
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ color: COLORS.SECONDARY }}
              textAlign={'center'}
            >
              +
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={COLORS.SECONDARY}
            sx={{
              textDecoration: 'none',
              '&:hover': {
                color: COLORS.PRIMARY
              }
            }}
          >
            Start your first plan
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
};
