import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
 

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('blue')}
      color={useColorModeValue('white')}
      fontSize={"lg"}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
         

          <Stack align={'flex-start'}>
            <Link href={'#'}>Menu Center</Link>
            <Link href={'#'}>Catering</Link>
            <Link href={'#'}>Gift Cards</Link>
            <Link href={'#'}>Fundrasers & Charities</Link>
            <Link href={'#'}>Careers</Link>
          </Stack>

          <Stack align={'flex-start'}>
             <Link href={'#'}>Franchising</Link>
            <Link href={'#'}>Investors</Link>
            <Link href={'#'}>Press Releases</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Feedback</Link>
          </Stack>

          <Stack>
          <ListHeader>JOIN LOCO REWARDS</ListHeader>
            <Text fontSize={'md'}>
              Earn points with every order, receive a birthday reward and other evaluable offers throughout the year. Plus, special app features to order ahead, pay, and save your favorites.
            </Text>
          </Stack>


          <Stack align={'flex-start'} paddingLeft={'100px'}>
          <ListHeader>Install App</ListHeader>
            {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
            <img style={{width:"70%" , height:"20%"}}  src='https://www.elpolloloco.com/content/img/download-button-app-store.webp' />
            <img style={{width:"70%" , height:"20%"}} src='https://www.elpolloloco.com/content/img/download-button-google.webp'/>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 MealMover. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}