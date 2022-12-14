import { Box, Skeleton, Stack, Typography } from '@mui/material';

import Layout from './Layout';
import { ListItem } from './enterprenuer-competencies';
import ReactPlayer from 'react-player';
import { useState } from 'react';

export default () => {
  const [selectedStatus, setSelectedStatus] = useState('Main Profession');
  const subtitle = 'Form and social status';
  const statuses = ['Main Profession', 'Side Occupation', 'Others'];
  const desc =
    'Before you start, you need to make some important choices. Are you going to become a full-time entrepreneur or are you going to combine your self-employed activity with another job? And which legal form do you prefer? Are you going for a sole proprietorship or rather a company?';

  const handleSelectedStatus = (event) => {
    setSelectedStatus(event.target.checked);
  };
  const options = [
    'proprietorship',
    'partnership',
    'BV',
    'NV',
    'resume',
    'VOF',
    'VZW',
    'commV'
  ];
  return (
    <Stack direction="row">
      <Layout description={desc} subtitle={subtitle}>
        <Typography color="#E03C31" sx={{ cursor: 'pointer' }}>
          Are you starting as a main or secondary occupation?
        </Typography>
        <Stack
          direction="row"
          justisfyContent="space-between"
          marginBottom="2rem"
          spacing={3}
        >
          {statuses.map((status) => (
            <StatusCard
              key={status}
              selected={selectedStatus}
              status={status}
              handleSelectedStatus={handleSelectedStatus}
            />
          ))}
        </Stack>
        <Typography color="#E03C31" sx={{ cursor: 'pointer' }}>
          Legal form (sole proprietorship or partnership)
        </Typography>
        <SelectForms options={options} />
      </Layout>
      <InfoSection />
    </Stack>
  );
};

const StatusCard = ({ status, selected, handleSelectedStatus }) => {
  return (
    <Stack
      padding="1rem"
      alignItems="center"
      justifyContent="space-between"
      width="10rem"
      border="1px solid #ccee"
      borderRadius="0.5rem"
    >
      <Typography fontWeight="bold">{status}</Typography>
      <IsSelected
        selected={selected}
        handleSelectedStatus={handleSelectedStatus}
      />
    </Stack>
  );
};

const IsSelected = ({ handleSelectedStatus }) => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      padding="0.1rem"
      border="1px solid #ccee"
      sx={{ borderRadius: '50%', cursor: 'pointer' }}
    >
      <Box
        width="1rem"
        height="1rem"
        border="1px solid #ccee"
        sx={{ borderRadius: '50%', background: '#E03C31' }}
        onClick={handleSelectedStatus}
      />
    </Box>
  );
};

const SelectForms = ({ options }) => {
  const onOptionChangeHandler = (event) => {
    console.log('User Selected Value -> ', event.target.value);
  };
  return (
    <select
      onChange={onOptionChangeHandler}
      style={{
        border: '1px solid #ccc',
        outline: 'none',
        padding: '0.5rem',
        borderRadius: '5px',
        margin: '1rem 0',
        width: '100%'
      }}
    >
      <option>Select</option>
      {options.map((option) => {
        return <option key={option}>{option}</option>;
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
      <Typography
        color="#E03C31"
        fontWeight="bold"
        margin="1rem 0"
        variant="body1"
      >
        Difference between main and secondary occupation
      </Typography>
      <Typography color="#2A424E" variant="p">
        If the self-employed activity is your main or only occupation, then you
        are self-employed in main occupation. If you are a salaried employee or
        civil servant in addition to your self-employed activity, being
        self-employed as a secondary occupation is also an option.
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
      <Typography color="#E03C31" fontWeight="bold" margin="1rem 0">
        To ask?
      </Typography>
      <Typography color="#2A424E" variant="p">
        Do you have questions about your personal status? Let an expert assist
        you.
      </Typography>
      <Typography color="#E03C31" fontWeight="bold" margin="1rem 0">
        Related Videos
      </Typography>
      <ReactPlayer
        width="400px"
        url="https://youtu.be/rEYWpVgaP-M"
        fallback={<Skeleton variant="rectangular" width={500} />}
      />
      <Typography color="#2A424E" margin="1rem 0">
        Learn more about the differences between{' '}
        <span style={{ fontWeight: 'bolder', textDecoration: 'underline' }}>
          a sole proprietorship and a partnership{' '}
        </span>
        and discover the advantages and disadvantages.
      </Typography>
    </Stack>
  );
};
