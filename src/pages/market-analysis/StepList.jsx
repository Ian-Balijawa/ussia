import * as React from 'react';

import { Buildings, Users } from 'phosphor-react';

import AddOption from './AddOption';
import Box from '@mui/material/Box';
import { COLORS } from '../../constants/colors';
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import rehypeSanitize from 'rehype-sanitize';

export const Card = ({ title, Icon }) => {
  const [checked, setChecked] = React.useState(false);
  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box
      sx={{
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        color: COLORS.SECONDARY,
        margin: { xs: 'auto', md: '2em' },
        padding: '1em',
        width: 'fit-content',
        borderRadius: '5px',
        textAlign: 'center',
        '&:hover': {
          boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          textDecoration: 'none'
        }
      }}
    >
      <Link style={{ textDecoration: 'none', color: COLORS.SECONDARY }}>
        {Icon}
        <Typography variant="body2" textAlign="center" color={COLORS.SECONDARY}>
          {title}
        </Typography>
      </Link>
      <Checkbox
        sx={{
          color: COLORS.PRIMARY,
          '&.Mui-checked': { color: COLORS.PRIMARY }
        }}
        checked={checked}
        onChange={handleChecked}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </Box>
  );
};

export const StepOne = () => {
  const customers = [
    { title: 'Consumers (C2C)', icon: <Users size={32} /> },
    { title: 'Businesses (B2B)', icon: <Buildings size={32} /> }
  ];
  return (
    <>
      <Typography variant="body2" color={COLORS.PRIMARY} textAlign="left">
        Step 1: Who are your customers?
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        margin="1em 0"
        width="fit-content"
        spacing={3}
      >
        {customers.map((customer) => (
          <Card
            key={customer.title}
            title={customer.title}
            Icon={customer.icon}
          />
        ))}
      </Stack>
    </>
  );
};

export const StepTwo = () => {
  const [audienceList, setAudienceList] = React.useState([]);
  const handleAudience = (e) => {
    setAudience(e.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="body2" color={COLORS.PRIMARY} textAlign="left">
        Step 2: Determine your target group(s)
      </Typography>
      <Typography variant="body2" color={COLORS.SECONDARY} textAlign="left">
        List your most important target groups here and complete with a clear
        description per group. Also indicate why you chose these target groups.
      </Typography>
      <AddOption option="Add an audience" onClick={handleAudience} />
    </React.Fragment>
  );
};

export const StepThree = () => {
  return (
    <React.Fragment>
      <Typography variant="body2" color={COLORS.PRIMARY} textAlign="left">
        Step 3: What are your customers looking for?
      </Typography>
    </React.Fragment>
  );
};

const Audience = ({ targetGroupName, value }) => {
  return (
    <Box sx={{ margin: '1em 0' }} spacing={3}>
      <Typography variant="body2" color={COLORS.SECONDARY} textAlign="left">
        {targetGroupName}
      </Typography>

      <Input
        placeholder="Name of Target Group"
        name={`targetGroup ${number}`}
        type="text"
        variant="outline"
        value={value}
        onChange={(e) => console.log(e.target.value)}
      />

      <Typography variant="body2" color={COLORS.SECONDARY} textAlign="left">
        The Description
      </Typography>

      <Box>
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
  );
};
