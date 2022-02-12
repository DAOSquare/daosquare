import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Container, Button, Image } from '@chakra-ui/react';
import logo from '../../assets/images/logo.svg';
import line from '../../assets/images/line.svg';
import close from '../../assets/images/close.svg';
import './index.css';

const menuData = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Summon',
    path: '/summon',
  },
  {
    name: 'Landscape',
    path: '/landscape',
  },
  {
    name: 'Find friends',
    path: '/join',
  },
  {
    name: 'Incubator',
    path: '/incubator',
  },
];

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [curMenu, setCurMenu] = useState('');

  return (
    <>
      <Box
        h={{ base: '80px', md: '120px' }}
        w="100%"
        pos="fixed"
        top={0}
        left={0}
        background="rgba(230, 235, 255, 0.2)"
        backdropFilter="blur(40px)"
        zIndex={999}
      >
        <Container
          maxW="container.xl"
          h="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/">
            <Image src={logo} w={{ base: '120px', md: '200px' }} />
          </Link>

          <Flex>
            <Box display={{ base: 'none', md: 'block' }}>
              <Link to="/summon">
                <Button mr={10}>Summon</Button>
              </Link>
            </Box>
            <Image
              src={line}
              w={{ base: 5, md: 7 }}
              cursor="pointer"
              onClick={() => {
                setIsShowMenu(!isShowMenu);
              }}
            />
          </Flex>
        </Container>
      </Box>

      <Box className="menu-cover" display={isShowMenu ? 'auto' : 'none'}>
        <Box
          pos="absolute"
          top={5}
          right={5}
          cursor="pointer"
          onClick={() => setIsShowMenu(false)}
        >
          <Image src={close} />
        </Box>
        {menuData.map((d, i) => (
          <Box
            key={i}
            className={curMenu === i ? 'menu-item active' : 'menu-item'}
            onMouseEnter={() => setCurMenu(i)}
            onMouseLeave={() => setCurMenu('')}
            onClick={() => {
              setIsShowMenu(false);
            }}
          >
            <Link to={d.path}>
              <Box className="menu-text">{d.name}</Box>
            </Link>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Header;
