import { ArrowLeft, Eye } from 'phosphor-react';
import { Box, Button, Stack, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import MDEditor from '@uiw/react-md-editor';
import StrategyLayout from './Layout';
import rehypeSanitize from 'rehype-sanitize';
import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');
  console.log(description);
  return (
    <StrategyLayout
      subtitle="Mission"
      description="Your mission is pretty much the foundation of everything you do. It's why you started. It should inspire your (potential) customers and encourage them to purchase your product or service."
    >
      <Box spacing={2}>
        <Box>
          {visible ? (
            <Typography variant="body2" textAlign="left">
              Your mission statement shows why you do what you do . It therefore
              determines the course of your company. Without a well-defined
              mission, vision and strategy, your company is out of control and
              you will take actions that are not in line with your long-term
              goal. With your mission you know how to convince potential
              partners, investors, employees and other stakeholders to work with
              your company.
            </Typography>
          ) : null}
          <Typography
            variant="body2"
            color={COLORS.PRIMARY}
            sx={{ cursor: 'pointer', margin: '1em 0' }}
            textAlign="left"
            onClick={() => setVisible((visibility) => !visibility)}
          >
            {visible ? (
              <Stack
                direction="row"
                alignItems="center"
                sx={{ marginBottom: '1em', width: '10%' }}
                color={COLORS.PRIMARY}
                spacing={1}
              >
                <Eye size={16} color="#E03C31" /> Less Info
              </Stack>
            ) : (
              <Stack
                direction="row"
                alignItems="center"
                sx={{ marginBottom: '1em' }}
                color={COLORS.PRIMARY}
                spacing={1}
              >
                <Eye size={16} color="#E03C31" /> More Info
              </Stack>
            )}
          </Typography>
          <Box>
            <Typography
              variant="body2"
              color={COLORS.SECONDARY}
              textAlign="left"
              sx={{ marginBottom: '1em' }}
            >
              Mission
            </Typography>
            <MDEditor
              value={description}
              onChange={setDescription}
              previewOptions={{
                rehypePlugins: [[rehypeSanitize]]
              }}
            />
            <MDEditor.Markdown
              source={description}
              style={{ whiteSpace: 'pre-wrap' }}
            />
          </Box>
        </Box>
      </Box>
    </StrategyLayout>
  );
};
