import { Routes, Route, useLocation } from 'react-router-dom';
import { Flex, Container } from '@chakra-ui/react';
import BlurBG from './components/blurBG';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Summon from './pages/summon';
import Join from './pages/join';
import Landscape from './pages/landscape';
import Incubator from './pages/incubator';
import Guild from './pages/guild';

function App() {
  const location = useLocation();

  return (
    <Flex flexDir="column" height={location.pathname === '/' ? '100%' : 'auto'}>
      <BlurBG />
      <Header />

      <Container
        maxW={
          location.pathname === '/landscape' ||
          location.pathname === '/incubator' ||
          location.pathname === '/guild'
            ? 'container.xl'
            : 'container.md'
        }
        zIndex={2}
        marginTop={{ base: '80px', md: '120px' }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="summon" element={<Summon />} />
          <Route path="landscape" element={<Landscape />} />
          <Route path="join" element={<Join />} />
          <Route path="incubator" element={<Incubator />} />
          <Route path="guild" element={<Guild />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </Container>

      <Footer
        position={
          (location.pathname === '/' && window.innerHeight > 880) ||
          location.pathname === '/guild'
            ? 'absolute'
            : 'static'
        }
        bottom={0}
        left={0}
        right={0}
      />
    </Flex>
  );
}

export default App;
