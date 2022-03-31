import { Flex, Image, Link } from "@chakra-ui/react";
import discord from "../../assets/images/discord.svg";
import twitter from "../../assets/images/twitter.svg";
import dework from "../../assets/images/dework.svg";
import forum from "../../assets/images/forum.svg";

function Footer(props) {
  return (
    <Flex
      h="120px"
      lineHeight="120px"
      justifyContent="center"
      alignItems="center"
      zIndex={999}
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
      <Link href="https://forum.daosquare.io/" isExternal mx={4} w={5}>
        <Image src={forum} w="18px" />
      </Link>
    </Flex>
  );
}

export default Footer;
