import { Button, Link, Navbar } from '@nextui-org/react';

import { Layout } from './Layout';
import { Logo } from './Logo';
import useLocalStorage from '../../hooks/useLocalStorage';

export default () => {
  const [email, _] = useLocalStorage('email', 'ianbalijawa@gmail.com');

  const handleSubscribe = async () => {
    const res = await axios.post('/api/subscribe', {
      data: JSON.stringify({
        email
      })
    });
    console.log(res.data);
  };

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand
          css={{
            '@xs': {
              w: '12%'
            }
          }}
        >
          <Logo />
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
            <Button
              color="inherit"
              css={{
                minWidth: '100%'
              }}
              onClick={() => {
                handleSubscribe();
              }}
            >
              Subscribe to our newsletter
            </Button>
          </Navbar.Content>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
};
