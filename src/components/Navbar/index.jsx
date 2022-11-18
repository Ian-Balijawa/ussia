import { Avatar, Dropdown, Link, Navbar, Text } from '@nextui-org/react';

import { CollapsibleContext } from '../../context/collapsible';
import { Layout } from './Layout';
import { List } from 'phosphor-react';
import { Stack } from '@mui/material';
import { useContext } from 'react';

export default () => {
  const collapseItems = [
    'Business Plan',
    'Videos',
    'Toolkit',
    'Podcasts',
    'Courses',
    'Events',
    'FAQ',
    'Contact'
  ];

  const { collapseSidebar } = useContext(CollapsibleContext);

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            '@xs': {
              w: '12%'
            }
          }}
        >
          <Stack sx={{ cursor: 'pointer' }}>
            <List size={32} onClick={() => collapseSidebar()} />
          </Stack>
          <Navbar.Content
            enableCursorHighlight
            activeColor="secondary"
            hideIn="xs"
            variant="highlight-rounded"
          >
            <Navbar.Link isActive href="#">
              Business Plan
            </Navbar.Link>
            <Navbar.Link href="#">Videos</Navbar.Link>
            <Navbar.Link href="#">Toolkit</Navbar.Link>
            <Navbar.Link href="#">Podcasts</Navbar.Link>
            <Navbar.Link href="#">Courses</Navbar.Link>
          </Navbar.Content>
        </Navbar.Brand>

        <Navbar.Content
          css={{
            '@xs': {
              w: '12%',
              jc: 'flex-end'
            }
          }}
        >
          <Navbar.Content
            enableCursorHighlight
            activeColor="secondary"
            hideIn="xs"
            variant="highlight-rounded"
          >
            <Navbar.Link isActive href="#">
              Events
            </Navbar.Link>
            <Navbar.Link href="#">FAQ</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Content>
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
                  ian@ussia.org
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
};
