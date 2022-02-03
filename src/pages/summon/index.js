import { Box, Text, Heading, Button, Image } from '@chakra-ui/react';
import demo from '../../assets/images/demo.png';

function Summon() {
  return (
    <Box fontSize="20px" lineHeight="36px">
      <Heading as="h1" fontSize="44px" textAlign="center" my={9}>
        Summon
      </Heading>
      <Text my={9}>
        Believe it or not, copywriting is one of the most important
        content-creation skills a designer can possess. If you think about it,
        design exists to support and deliver content—not the other way around.
      </Text>
      <Text my={9}>
        As a designer, content should be the driving force behind many of your
        decisions, whether you’re creating the content or someone else is. So if
        you can understand how to write effective copy (and understand the
        purpose that it serves), you’ll be able to better serve your clients and
        ultimately create better designs.
      </Text>
      <Text my={9}>
        In this article, we’ll cover some helpful copywriting tips for designers
        to help you build better experiences.
      </Text>
      <Heading as="h2" fontSize="24px" mt={10} marginBottom="-12px">
        Sales Copywriting vs. UX copywriting
      </Heading>
      <Text my={9}>
        First things first, understand the nature of the copy you’re writing
        for. There are some subtle differences between sales (or persuasive)
        copywriting and UX writing.
      </Text>
      <Text my={9}>
        Why consistent writing makes you a better designer 5 soft skills every
        product designer should master The UX Writing Starter-Kit Sales
        copywriting is all about getting users to make a purchase or sign up for
        a product or service. UX copywriting, on the other hand, is all about
        helping users reach a goal efficiently and effectively. Make your copy
        easy to scan. People reading on the web don’t want to read huge chunks
        of content.
      </Text>
      <Text my={9}>
        Why consistent writing makes you a better designer 5 soft skills every
        product designer should master The UX Writing Starter-Kit Sales
        copywriting is all about getting users to make a purchase or sign up for
        a product or service. UX copywriting, on the other hand, is all about
        helping users reach a goal efficiently and effectively. Make your copy
        easy to scan. People reading on the web don’t want to read huge chunks
        of content.
      </Text>
      <Image src={demo} />
      <Text my={9}>
        Why consistent writing makes you a better designer 5 soft skills every
        product designer should master The UX Writing Starter-Kit Sales
        copywriting is all about getting users to make a purchase or sign up for
        a product or service. UX copywriting, on the other hand, is all about
        helping users reach a goal efficiently and effectively. Make your copy
        easy to scan. People reading on the web don’t want to read huge chunks
        of content.
      </Text>

      <Box textAlign="center" mt={20}>
        <Button>Join us</Button>
      </Box>

      <Box h={20}></Box>
    </Box>
  );
}

export default Summon;
