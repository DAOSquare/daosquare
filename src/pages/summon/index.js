import { useEffect, useRef } from 'react';
import { Box, Text, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Summon() {
  const videoWrapper = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);

    videoWrapper.current.style.height =
      videoWrapper.current.offsetWidth * 0.56 + 'px';
  }, []);

  return (
    <Box className="article">
      <Heading
        as="h1"
        textAlign="center"
        fontSize={{ base: '30px', md: '34px', lg: '44px' }}
        my={{ base: 4, md: 6, lg: 10 }}
      >
        Summon
      </Heading>

      <Box
        w="100%"
        // height="300px"
        borderRadius={6}
        overflow="hidden"
        mb={{ base: 8, md: 16 }}
        ref={videoWrapper}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Ek0SgwWmF9w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>

      <Text>
        If we can master our own lives; if we can enter a world where there is
        no harm and people respect and support each other for win-win; if we can
        do cool and great things with people who are interesting, talented and
        adventurous; if such a thing can be recorded in history.
      </Text>
      <Text>
        As a designer, content should be the driving force behind many of your
        decisions, whether you’re creating the content or someone else is. So if
        you can understand how to write effective copy (and understand the
        purpose that it serves), you’ll be able to better serve your clients and
        ultimately create better designs.
      </Text>
      <Text>Undoubtedly that must be DAO.</Text>
      <Text>
        We are a galaxy of people who want to "change the world" and go along
        with people who "change the world". We believe in Web3 because it allows
        us to become our true selves that are the so-call "sovereign
        individuals". We believe in DAO because it leads us to find those
        like-minded people and realise each other's dreams together.
      </Text>
      <Text>If it's the same with you, DAOSquare is summoning you!</Text>
      <Text>
        DAOSquare is building a new form of incubator which is based on the
        concept of Web3 and runs on the Ethereum. It links all kinds of resource
        (talents, social capital, funds, etc.) via the thought of DAO to support
        any valuable innovations of this new era. It can be either a great
        startup idea, an interesting product, a piece of art, an aspiring
        artist, a meaningful event or a circle of fantastic interest… We try to
        be as limitless as possible so that we can embrace the surprises that
        lie beyond our cognition boundaries.
      </Text>
      <Text>
        The incubator is supported by technology infrastructures (including
        investment and financing tools, task systems, talent pools, reputation
        protocols, etc.) that we are developing (and hope to incubate in the
        future) or aggregating.
      </Text>
      <Text>
        The incubator is incentivised by a token economic model ($RICE) that
        brings together the players of innovators (startup founder), talent,
        investor (institutions and individuals) and service provider (community,
        media, marketing, etc.) into a network of positive-sum games.
      </Text>

      <Text>
        So，if you have any ideas or skills, feel free to join DAOSquare. Here
        you can find like-minded people to summon a DAO or join their DAO, get
        financial support (investment or grant) and then realise your dream
        (startups) with your teammates.
      </Text>
      <Text>
        If you are an investor or an investment institution, feel free to join
        DAOSquare. Here you can be a partner of DAOSquare Venture DAO or summon
        your own VentureDAO and invest in promising early stage projects, as we
        have already done: Ceramic, DAOhaus, etc.
      </Text>
      <Text>
        If you are a service provider, feel free to join DAOSquare. Here you can
        help promising projects grow and reap the rewards.
      </Text>
      <Text>Before you click on "Join us" please confirm the following:</Text>
      <Text className="blockquote">
        If you want to go fast, go alone. If you want to go far, go together.
      </Text>

      <Text>Finally</Text>
      <Text>If you want to be your true self, DAOSquare is summoning you!</Text>
      <Box textAlign="center" mt={{ base: 8, md: 16, lg: 32 }}>
        <Link to="/join">
          <Button>Join us</Button>
        </Link>
      </Box>

      <Box h={{ base: 8, md: 16, lg: 32 }}></Box>
    </Box>
  );
}

export default Summon;
