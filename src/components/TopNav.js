import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from './Logo';

const Links = [
  {
    label: '모니터링',
    href: '/monitoring',
  },
  {
    label: '사고 데이터 시각화',
    href: '/visualization',
  },
  {
    label: '실시간 위험지표',
    href: '/real-time',
  }
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}s
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children.href}>
    {children.label}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('#CAE9FF', 'gray.800')} color={useColorModeValue('gray.700', 'white')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            bg="#CAE9FF"
            onClick={isOpen ? onClose : onOpen}
          />
          <Logo />
          <HStack
            as={'nav'}
            spacing={10}
            display={{ base: 'none', md: 'flex' }}
            justify={'flex-end'}
            mr={20}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}