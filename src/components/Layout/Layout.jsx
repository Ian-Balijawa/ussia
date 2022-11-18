import {
  ChartLineUp,
  Clock,
  CurrencyDollar,
  Horse,
  Megaphone,
  ProjectorScreenChart,
  SquaresFour,
  Sun,
  VideoCamera
} from 'phosphor-react';
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar';

import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import React from 'react';

export default ({ children }) => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar defaultCollapsed onClick={''}>
          <Menu>
            <MenuItem icon={<SquaresFour size={32} />} active>
              Back to the Overview
            </MenuItem>
            <MenuItem icon={<Sun size={32} />}> Idea</MenuItem>
            <MenuItem icon={<Horse size={32} />}> strategy</MenuItem>
            <MenuItem icon={<ChartLineUp size={32} />}>
              {' '}
              Market Analysis
            </MenuItem>
            <MenuItem icon={<Clock size={32} />}>
              People and Organisation
            </MenuItem>
            <MenuItem icon={<Megaphone size={32} />}> Marketing </MenuItem>
            <MenuItem icon={<CurrencyDollar size={32} />}> Financial </MenuItem>
            <MenuItem icon={<ProjectorScreenChart size={32} />}>
              {' '}
              StartUP{' '}
            </MenuItem>
          </Menu>
        </Sidebar>
        <main>{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  );
};
