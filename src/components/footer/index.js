import { Flex, Image, Link } from '@chakra-ui/react';
import discord from '../../assets/images/discord.svg';
import twitter from '../../assets/images/twitter.svg';
import github from '../../assets/images/github.svg';
import dework from '../../assets/images/dework1.svg';

function Footer(props) {
  return (
    <Flex
      h="120px"
      lineHeight="120px"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Link href="https://discord.com/invite/daosquare" isExternal mx={4} w={5}>
        <Image src={discord} w={5} />
      </Link>
      <Link href="https://twitter.com/DAOSquare" isExternal mx={4} w={5}>
        <Image src={twitter} w={5} />
      </Link>
      <Link
        href="https://app.dework.xyz/o/daosquare-5T2WcpGDJ3m6cOiG5ItJeL"
        isExternal
        mx={4}
        w={5}
      >
        <Image src={dework} w={4} />
      </Link>
      <Link href="https://github.com/DAOSquare" isExternal mx={4} w={5}>
        <Image src={github} w={5} />
      </Link>
    </Flex>
  );
}

export default Footer;
