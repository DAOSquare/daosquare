import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Container, Button, Image } from '@chakra-ui/react';
import logo from '../../assets/images/logo.svg';
import line from '../../assets/images/line.svg';
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
    name: 'Join us',
    path: '/join',
  },
];

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [curMenu, setCurMenu] = useState('');

  return (
    <>
      <Box h="120px">
        <Container
          maxW="container.xl"
          h="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/" display="inline">
            <Image src={logo} />
          </Link>

          <Box>
            <Link to="/summon">Summon</Link>|
            <Link to="/landscape">Landscape</Link>|<Link to="/join">Join</Link>
          </Box>

          <Flex>
            <Link to="/summon">
              <Button mr={10}>Summon</Button>
            </Link>
            <Image
              src={line}
              w={7}
              cursor="pointer"
              onClick={() => {
                setIsShowMenu(!isShowMenu);
              }}
            />
          </Flex>
        </Container>
      </Box>

      <Box className="menu-cover" display={isShowMenu ? 'auto' : 'none'}>
        {menuData.map((d, i) => (
          <Box
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
