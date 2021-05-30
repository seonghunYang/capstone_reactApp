import { Container } from '@chakra-ui/react';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

import vesselIcon from "../images/vesselIcon.jpg";

function Main() {
  return (
    <>
      <TopNav/>
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'blue.400',
                    zIndex: -1,
                  }}>
                  I SEA
                </Text>
                <br />{' '}
                <Text color={'blue.400'} as={'span'}>
                Marine Accident Monitoring System
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Real-time prediction of marine accidents,National Ocean Monitoring 
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Get Started
                </Button>
                <Button rounded={'full'}>Learn more</Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1} align="center">
            <Image
              boxSize="lg"
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                vesselIcon
              }
            />
          </Flex>
        </Stack>
      <Footer/>
    </>
  );
}

export default Main;
