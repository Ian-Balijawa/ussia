import {
  ChartLineUp,
  Clock,
  CurrencyDollar,
  Horse,
  List,
  Megaphone,
  ProjectorScreenChart,
  SquaresFour,
  Sun
} from 'phosphor-react';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import React, { useContext } from 'react';

import { CollapsibleContext } from '../../context/collapsible';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import { ROUTES } from '../../routes/routes';
import { UserContext } from '../../context/userContentx';

export default ({ children }) => {
  const { user, setUser } = useContext(UserContext);
  const { collapseSidebar } = useContext(CollapsibleContext);

  return (
    <React.Fragment>
      <Navbar />
      <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar defaultCollapsed onClick={''}>
          <Menu>
            <MenuItem
              onClick={() => collapseSidebar()}
              routerLink={<Link to={ROUTES.ROOT} />}
              icon={<List size={32} />}
            >
              Toggle Sidebar
            </MenuItem>
            <MenuItem
              routerLink={<Link to={ROUTES.ROOT} />}
              icon={<SquaresFour size={32} />}
            >
              Back to the Overview
            </MenuItem>
            <MenuItem
              routerLink={<Link to={ROUTES.IDEA} />}
              icon={<Sun size={32} />}
            >
              Idea
            </MenuItem>
            <MenuItem
              routerLink={<Link to={ROUTES.STRATEGY} />}
              icon={<Horse size={32} />}
            >
              strategy
            </MenuItem>
            <MenuItem
              routerLink={<Link to={ROUTES.MARKET_ANALYSIS} />}
              icon={<ChartLineUp size={32} />}
            >
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
              Marketing{' '}
            </MenuItem>
            <MenuItem
              routerLink={<Link to={ROUTES.FINANCIAL} />}
              icon={<CurrencyDollar size={32} />}
            >
              Financial{' '}
            </MenuItem>
            <MenuItem
              routerLink={<Link to={ROUTES.STARTUP} />}
              icon={<ProjectorScreenChart size={32} />}
            >
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
