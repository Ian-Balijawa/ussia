import * as React from 'react';

import { Buildings, Paperclip, Users } from 'phosphor-react';

import AddOption from './AddOption';
import Box from '@mui/material/Box';
import { COLORS } from '../../constants/colors';
import { Checkbox } from '@mui/material';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
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
      <Typography variant="body2" color={COLORS.PRIMARY}>
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
  const [audienceList, setAudienceList] = React.useState([
    {
      id: 1,
      nameOfTargetAudience: 'Target Audience one',
      descriptionOfTargetAudience: 'Description of Target Audience one'
    }
  ]);

  const handleAddMoreAudience = (e) => {
    const newAudienceList = [...audienceList, e.target.value];
    setAudienceList(newAudienceList);
  };

  return (
    <React.Fragment>
      <Typography
        variant="body1"
        margin="1rem 0"
        fontWeight={'bold'}
        color={COLORS.PRIMARY}
      >
        Step 2: Determine your target group(s)
      </Typography>
      <Typography variant="body2" color={COLORS.SECONDARY}>
        List your most important target groups here and complete with a clear
        description per group. Also indicate why you chose these target groups.
      </Typography>
      <AddOption item="Add an audience" onClick={handleAddMoreAudience} />
      {audienceList.map((audience) => (
        <Audience
          key={audience.id}
          targetGroupName={`TARGET GROUP ${audience.id}`}
          nameOfTargetAudience={audience.nameOfTargetAudience}
          description={audience.description}
        />
      ))}
    </React.Fragment>
  );
};

export const StepThree = () => {
  const [description, setDescription] = React.useState('');
  return (
    <React.Fragment>
      <Typography
        variant="body1"
        margin="1rem 0"
        fontWeight="bold"
        color={COLORS.PRIMARY}
      >
        Argumentation
      </Typography>
      <Typography variant="body1" color={COLORS.SECONDARY}>
        You described which target groups you want to reach. Argue here that
        these target group(s) are also effective, for example based on the
        results of your market research, surveys, statistics…
      </Typography>

      <Box margin="2rem 0">
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
      <Typography variant="body1" margin="1rem 0" fontWeight="bold">
        Files
      </Typography>
      <Typography variant="body1">
        Here you can upload extra files related to your target group analysis.
        Attention, these files can be viewed by your commenters, but are not
        included in the export of a plan.
      </Typography>
      <Stack
        margin="1rem"
        justifyContent="center"
        alignItems="center"
        height="10rem"
        sx={{
          border: '2px dashed #ccc',
          borderRadius: '1rem',
          '&:hover': {
            borderColor: '#DF4136'
          }
        }}
      >
        <label htmlFor="image-upload">
          <Paperclip size={50} weight="fill" />
          <Typography margin="1rem" className="upload fa fa-upload">
            Select a file
          </Typography>
        </label>
        <input
          type="file"
          id="image-upload"
          accept="*"
          onChange={(e) => console.log(e.target.files)}
        />
      </Stack>
    </React.Fragment>
  );
};

const Audience = ({ targetGroupName, nameOfTargetAudience, description }) => {
  return (
    <Box
      sx={{ padding: '1em', background: '#fff', borderRadius: '.4rem' }}
      spacing={3}
    >
      <Typography variant="body2">{targetGroupName}</Typography>
      <Stack margin="1rem 0" justifyContent={'flex-start'}>
        <label
          htmlFor="target-group-name"
          style={{ color: '#E03C31', alignSelf: 'flex-start' }}
          variant="body1"
        >
          Name of target group
        </label>
        <Input
          id="target-group-name"
          name={'nameOfTargetAudience'}
          style={{ width: '80%' }}
          onChange={(e) => console.log(e.target.value)}
        />
      </Stack>

      <Typography margin="1rem 0" variant="body2">
        The Description
      </Typography>

      <Box>
        <MDEditor
          value={description}
          onChange={''}
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
