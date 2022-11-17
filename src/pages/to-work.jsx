import * as React from 'react';

import { Stack, Typography } from '@mui/material';

import { COLORS } from '../constants/colors';
import { CustomModal } from '../components/Modal';
import FeatureCard from '../components/Cards/FeatuerCard';
import { Image } from '@nextui-org/react';
import PlanForm from '../components/PlanForm';
import course from '../assets/svgs/courses.svg';
import person1 from '../assets/images/person1.png';
import person2 from '../assets/images/person2.png';
import podcast from '../assets/svgs/podcast.svg';
import toolkit from '../assets/svgs/toolkit.svg';
import { useState } from 'react';
import video from '../assets/svgs/videos.svg';

export default () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  const cardInfo = [
    {
      name: 'Videos',
      image: video,
      link: '/videos'
    },
    {
      name: 'Tools for Starters',
      image: toolkit,
      link: 'toolkit'
    },
    {
      name: 'Podcasts',
      image: podcast,
      link: '/podcasts'
    },
    {
      name: 'courses',
      image: course,
      link: '/courses'
    }
  ];
  return (
    <React.Fragment>
      <Stack
        direction={'column'}
        width="100%"
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: '1em'
        }}
      >
        <Stack
          direction={'row'}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            padding: '0 2em'
          }}
        >
          <Image
            width={200}
            height={200}
            src={person1}
            alt="working person"
            objectFit="cover"
          />
          <Stack direction="column" width="50%">
            <Typography
              variant="h4"
              textAlign="center"
              color={COLORS.SECONDARY}
            >
              To Work
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
              color={COLORS.SECONDARY}
            >
              Do you dream of your own company? Then you are very welcome on the
              Starters platform. This platform consists of five parts that help
              you develop your business idea and start your business. Good luck!
            </Typography>
          </Stack>
          <Image
            width={200}
            height={200}
            src={person2}
            alt="working person"
            objectFit="cover"
            display={{ xs: 'none', sm: 'block' }}
          />
        </Stack>

        {/* second */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          width={'100%'}
          justifyContent="center"
          alignItems="center"
          margin="2em auto"
          spacing={2}
        >
          <Stack
            direction="column"
            width="50%"
            sx={{
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
              borderRadius: '5px'
            }}
            justifyContent="center"
            alignItems="center"
            padding={2}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              width="100%"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Image
                width={200}
                src={person1}
                alt="working person"
                objectFit="cover"
              />
              <Stack direction="column">
                <Typography
                  variant="h4"
                  color={COLORS.SECONDARY}
                  textAlign="left"
                >
                  Business Plan
                </Typography>
                <Typography
                  variant="body2"
                  color={COLORS.SECONDARY}
                  textAlign="left"
                >
                  Do you dream of your own company? Then you are very welcome on
                  the Starters platform. This platform consists of three parts
                  that help you develop your business idea and start your
                  business. Good luck!
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              width="100%"
              height="27em"
              justifyContent="center"
              alignItems="center"
              sx={{
                background: '#F5F5F5',
                borderRadius: '5px',
                margin: '1rem auto'
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                onClick={() => {
                  handler();
                }}
                sx={{
                  cursor: 'pointer'
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  color={COLORS.SECONDARY}
                  textAlign={'center'}
                  sx={{
                    border: `2px dashed ${COLORS.SECONDARY}`,
                    width: '1em',
                    height: '1em',
                    borderRadius: '100%',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '5px',
                    '&:hover': {
                      padding: '10px',
                      transition: 'all 0.3s ease-in-out',
                      fontSize: '3.5rem'
                    }
                  }}
                >
                  +
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: COLORS.SECONDARY,
                    marginLeft: '1em',
                    cursor: 'pointer',
                    '&:hover': {
                      color: COLORS.PRIMARY,
                      transition: 'all 0.3s ease-in-out'
                    }
                  }}
                  textAlign={'center'}
                >
                  Start Your First Plan
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="column" justifyContent="space-between">
            {cardInfo.map((item) => (
              <FeatureCard key={item} name={item.name} imagesrc={item.image} />
            ))}
          </Stack>
        </Stack>
        <CustomModal
          visible={visible}
          closeHandler={closeHandler}
          setVisible={setVisible}
        >
          <PlanForm />
        </CustomModal>
        {/* second end */}
      </Stack>
    </React.Fragment>
  );
};
