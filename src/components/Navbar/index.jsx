import { Avatar, Dropdown, Link, Navbar, Text } from '@nextui-org/react';
import {
  privateRoutes as collapseItems,
  publicRoutes
} from '../../constants/routes';

import { AcmeLogo } from './AcmeLogo';
import { Layout } from './Layout';
import { ROUTES } from '../../routes/routes';
import { SelectPlan } from '../landing/SelectRegion';
import { Stack } from '@mui/material';

export default function App() {
  const location = window.location.pathname;
  const regions = [
    'Others',
    'Agriculture',
    'Automobile',
    'Banking',
    'Construction'
  ];
  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Stack direction="row" spacing={20}>
          <Navbar.Brand
            css={{
              '@xs': {
                w: '12%'
              }
            }}
          >
            <AcmeLogo />
          </Navbar.Brand>
          {location === ROUTES.LANDING && (
            <SelectPlan
              sx={{ display: { xs: 'none' } }}
              view="Choose Region"
              options={regions}
            />
          )}
        </Stack>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link isActive href="#">
            Engage?
          </Navbar.Link>
          <Navbar.Link href="#">Press</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
          <Navbar.Link href="#">Login</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            '@xs': {
              w: '12%',
              jc: 'flex-end'
            }
          }}
        >
          {!publicRoutes.includes(location) && (
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    color="secondary"
                    size="md"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item key="profile" css={{ height: '$18' }}>
                  <Text b color="inherit" css={{ d: 'flex' }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: 'flex' }}>
                    zoey@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  My Settings
                </Dropdown.Item>
                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                  Analytics
                </Dropdown.Item>
                <Dropdown.Item key="system">System</Dropdown.Item>
                <Dropdown.Item key="configurations">
                  Configurations
                </Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? '$error' : ''
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: '100%'
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
