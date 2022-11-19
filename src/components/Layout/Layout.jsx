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
import { ROUTES } from '../../routes/paths';
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
            <MenuItem
              routerLink={<Link to={ROUTES.ROOT} />}
              icon={<SquaresFour size={32} />}
              active
            >
              Back to the Overview
            </MenuItem>
            <MenuItem
              routerLink={<Link to={ROUTES.IDEA} />}
              icon={<Sun size={32} />}
            >
              {' '}
              Idea
            </MenuItem>
            <MenuItem
              routerLink={<Link to={ROUTES.STRATEGY} />}
              icon={<Horse size={32} />}
            >
              {' '}
              strategy
            </MenuItem>
            <MenuItem
              routerLink={<Link to={ROUTES.MARKET_ANALYSIS} />}
              icon={<ChartLineUp size={32} />}
            >
              {' '}
              Market Analysis
            </MenuItem>
            <MenuItem
              routerLink={<Link to={ROUTES.PEOPLE_AND_ORGANISATION} />}
              icon={<Clock size={32} />}
            >
              People and Organisation
            </MenuItem>
            <MenuItem
              routerLink={<Link to={ROUTES.MARKETING} />}
              icon={<Megaphone size={32} />}
            >
              {' '}
              Marketing{' '}
            </MenuItem>
            <MenuItem
              routerLink={<Link to={ROUTES.FINANCIAL} />}
              icon={<CurrencyDollar size={32} />}
            >
              {' '}
              Financial{' '}
            </MenuItem>
            <MenuItem
              routerLink={<Link to={ROUTES.START_UP} />}
              icon={<ProjectorScreenChart size={32} />}
            >
              {' '}
              Start up{' '}
            </MenuItem>
          </Menu>
        </Sidebar>
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};
