import * as React from 'react';

import { Box, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import MarketAnalysisLayout from './Layout';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

export default () => {
  const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad'
  ];

  const subtitle = 'Target Group Determination';
  const description =
    'You can only make the right choices for your company if you know who your customers are and what they do. Who are your potential customers? Do they need your products/services? Is it necessary to adapt your offer to the needs of your target audience?';

  return (
    <MarketAnalysisLayout description={description} subtitle={subtitle}>
      <Box>
        <StepperComponent steps={steps} />
        <Typography variant="body2" color={COLORS.PRIMARY} textAlign="left">
          Step 1: Who are your customers?
        </Typography>
      </Box>
    </MarketAnalysisLayout>
  );
};

export const StepperComponent = ({ steps }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
