import { Stack, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import MarketAnalysisLayout from './Layout';
import Stepper from './Stepper';

export default () => {
  const subtitle = 'Target Group Determination';
  const description =
    'You can only make the right choices for your company if you know who your customers are and what they do. Who are your potential customers? Do they need your products/services? Is it necessary to adapt your offer to the needs of your target audience?';

  return (
    <MarketAnalysisLayout description={description} subtitle={subtitle}>
      <Stack>
        <Stepper />
      </Stack>
    </MarketAnalysisLayout>
  );
};
