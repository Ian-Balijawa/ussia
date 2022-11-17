import { Button, Navbar as Nav } from '@nextui-org/react';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';

import { COLORS } from './../../constants/colors';
import Footer from '../Footer';
import Navbar from '../Navbar';
import React from 'react';
import { VideoCamera } from 'phosphor-react';

export default ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar>
          <Menu>
            <MenuItem icon={<VideoCamera />} active>
              Back to the Overview
            </MenuItem>
            <MenuItem icon={<VideoCamera />}> Idea</MenuItem>
            <MenuItem icon={<VideoCamera />}> strategy</MenuItem>
            <MenuItem icon={<VideoCamera />}> Market Analysis</MenuItem>
            <MenuItem icon={<VideoCamera />}>People and Organisation</MenuItem>
            <MenuItem icon={<VideoCamera />}> Marketing </MenuItem>
            <MenuItem icon={<VideoCamera />}> Financial </MenuItem>
            <MenuItem icon={<VideoCamera />}> StartUP </MenuItem>
          </Menu>
        </Sidebar>
        <main>{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  );
};
