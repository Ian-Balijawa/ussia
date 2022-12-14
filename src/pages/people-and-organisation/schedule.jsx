import { Box, Divider, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import Layout from './Layout';
import { ListItem } from './enterprenuer-competencies';
import MDEditor from '@uiw/react-md-editor';
import { planSchema } from '../../constants/schema';
import rehypeSanitize from 'rehype-sanitize';
import { todos } from '../../constants/todos';

export default () => {
  const [weekPlan, setWeekPlan] = useState(planSchema);
  const [comments, setComments] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const subtitle = 'Schedule';
  const options = [];
  const days = [];

  for (const [key, value] of Object.entries(weekPlan)) {
    days.push(weekPlan[key].day);
  }

  todos.forEach((todo) => {
    options.push(todo.name);
  });

  const desc =
    "Entrepreneurship is more than selling your products or providing services. There is a lot of administration involved. Because without invoices there is no money coming in. Customers don't come naturally either. So keep in mind that you have time for marketing, customer acquisition and networking. And, very importantly, make sure you take time for hobbies, family, friends and yourself.";
  return (
    <Stack direction="row">
      <Layout description={desc} subtitle={subtitle}>
        <Typography>
          Now think carefully about what your{' '}
          <span style={{ fontWeight: 'bold' }}>ideal planning </span> looks
          like.
        </Typography>
        <Box
          sx={{
            display: 'grid',
            margin: '1rem 0',
            gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(4,1fr)' },
            gap: '2'
          }}
        >
          {days.slice(0, 4).map((day) => (
            <Stack key={day}>
              <Typography variant="h6">{day}</Typography>
              {Array.from({ length: 4 }, (_, i) => i).map((item) => {
                return (
                  <React.Fragment>
                    <SelectForms
                      options={options}
                      key={item}
                      setSelectedColor={setSelectedColor}
                      selectedColor={selectedColor}
                    />
                    {item === 1 && (
                      <Divider
                        orientation="horizontal"
                        sx={{ border: '1px dashed #ccc', margin: '1rem 0' }}
                        width="90%"
                        flexItem
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </Stack>
          ))}
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1,1fr)', md: 'repeat(3,1fr)' },
            gap: '2'
          }}
        >
          {days.slice(4).map((day) => (
            <Stack key={day}>
              <Typography variant="h6">{day}</Typography>
              {Array.from({ length: 4 }, (_, i) => i).map((item) => {
                return (
                  <React.Fragment>
                    <SelectForms
                      options={options}
                      key={item}
                      setSelectedColor={setSelectedColor}
                      selectedColor={selectedColor}
                    />
                    {item === 1 && (
                      <Divider
                        orientation="horizontal"
                        sx={{ border: '1px dashed #ccc', margin: '1rem 0' }}
                        width="90%"
                        flexItem
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </Stack>
          ))}
        </Box>
        <Typography
          variant="body1"
          sx={{ color: '#E03F35', marginTop: '2rem' }}
        >
          comments
        </Typography>
        <MDEditor
          value={comments}
          onChange={setComments}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]]
          }}
        />
      </Layout>
      <InfoSection />
    </Stack>
  );
};

const SelectForms = ({ options, selectedColor, setSelectedColor }) => {
  const onOptionChangeHandler = (event) => {
    console.log('User Selected Value -> ', event.target.value);
    const color = todos.find((todo) => todo.name === event.target.value).color;
    setSelectedColor(color);
  };

  return (
    <select
      onChange={onOptionChangeHandler}
      style={{
        border: 'none',
        outline: 'none',
        padding: '0.4rem',
        borderRadius: '10rem',
        background: selectedColor || '#fff',
        margin: '0.4rem 0',
        width: '90%'
      }}
    >
      {options.map((option) => {
        return (
          <option style={{ background: '#fff' }} key={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

const InfoSection = () => {
  const links = [
    {
      title: 'Boost your productivity as a freelancer',
      href: 'https://www.freelancer.com/community/articles/boost-your-productivity-as-a-freelancer'
    },
    {
      title: '10 tips to save time',
      href: 'https://www.freelancer.com/community/articles/10-tips-to-save-time'
    },
    {
      title: 'Quickly and Easily manage your accounting completely online',
      href: 'https://www.freelancer.com/community/articles/quickly-and-easily-manage-your-accounting-completely-online'
    }
  ];
  return (
    <Stack
      width="30%"
      sx={{ margin: '1em auto', display: { xs: 'none', md: 'block' } }}
    >
      <Typography fontWeight="bold" variant="body1" color="#E03C31">
        Make the most of your time
      </Typography>
      <ListItem item="Calculate how many hours you have to invoice and whether it is feasible in your schedule." />
      <Divider orientation="horizontal" flexItem />
      <ListItem item="Use the remaining time for your administration and to run your business." />
      <Typography fontWeight="bold" variant="body1" color="#E03C31">
        Which means:
      </Typography>
      <ListItem item="Networking" />
      <Typography variant="body1" color="#2A424E">
        Time you need to build, strengthen and maintain your network.
      </Typography>
      <ListItem item="Development" />
      <Typography variant="body1" color="#2A424E">
        Hours you use to invent, develop and create new products and/or
        services.
      </Typography>
      <ListItem item="Sale" />
      <Typography variant="body1" color="#2A424E">
        The time when you are actually selling your products or the hours you
        invoice as a freelancer.
      </Typography>
      <Typography
        fontWeight="bold"
        variant="body1"
        margin="1rem 0"
        color="#E03C31"
      >
        Useful Links
      </Typography>
      {links.map((link) => (
        <ListItem
          isLink={true}
          item={link.title}
          styles={{ textDecoration: 'underline' }}
          href={link.href}
        />
      ))}
    </Stack>
  );
};
