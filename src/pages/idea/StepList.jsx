import { Input } from '../../components/Input';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { COLORS } from '../../constants/colors';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

export const StepOne = () => {
  const [uniqueness, setUniqueness] = useState('');
  const [offerComposition, setOfferComposition] = useState('');
  const [targetGroup, setTargetGroup] = useState('');
  const [expectations, setExpecations] = useState('');
  const navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(uniqueness, offerComposition, targetGroup, expectations);
  };

  return (
    <React.Fragment>
      <Typography
        variant="body2"
        color={COLORS.PRIMARY}
        fontWeight="bold"
        sx={{ margin: '0.3em 0' }}
      >
        Step 1: Tell us a little more about your idea
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Input
          style={{ width: '90%' }}
          name="targetGroup"
          value={targetGroup}
          onChange={({ target }) => setTargetGroup(target.value)}
          placeholder="Who do you want to reach?"
        />
        <Input
          style={{ width: '90%' }}
          name="expectations"
          value={expectations}
          onChange={({ target }) => setExpecations(target.value)}
          placeholder="What needs/expectations does your target group have?"
        />
        <Input
          style={{ width: '90%' }}
          name="offerComposition"
          value={offerComposition}
          onChange={({ target }) => setOfferComposition(target.value)}
          placeholder="What does your offer consist of?"
        />
        <Input
          style={{ width: '90%' }}
          name="uniqueness"
          value={uniqueness}
          onChange={({ target }) => setUniqueness(target.value)}
          placeholder="What makes your offer unique?"
        />
      </Box>
    </React.Fragment>
  );
};

export const StepTwo = () => {
  const [description, setDescription] = useState('');

  return (
    <React.Fragment>
      <Typography
        variant="body2"
        color={COLORS.PRIMARY}
        fontWeight="bold"
        sx={{ margin: '1em 0' }}
      >
        Step 2: Develop a strong elevator pitch
      </Typography>
      <Typography margin="1rem 0" variant="body2">
        We took the answers to your questions from step 1 and we expanded them
        into an example pitch. Now it's up to you to refine and perfect this
        example.
      </Typography>
      <Typography margin="1rem 0" variant="body2">
        Your presentation
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
    </React.Fragment>
  );
};
