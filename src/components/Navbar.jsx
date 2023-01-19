import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { Link } from 'react-router-dom';
  import nurti_1 from "../assets/nurti_1.png"
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              Logo
            </Text>
           
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'red.400'}
              href={'#'}
              _hover={{
                bg: 'blue',
              }}>
              Sign In
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'red.400'}
              href={'#'}
              _hover={{
                bg: 'blue',
              }}>
              Sign Up
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
         
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        
          <Box >
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                 
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                 
                </Link>
              </PopoverTrigger>
  
              
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>

                  </Stack>
                </PopoverContent>
              
            </Popover>
          </Box>
       
      </Stack>
    );
  };
  export function Navbar(){
    return <>
    <Flex
          bg={useColorModeValue('white', 'gray.800')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          justifyContent={'space-around'} 
          background="blue"
          color="white"
          fontWeight="bold"
          >
           
           <Link to="/allPage">
            <Text
              as={'a'}
              fontSize={'lg'}
              fontWeight={400}
              variant={'link'}
              >
              ALL
            </Text>
            </Link>

           <Link to="/burritosPage">
            <Text
              as={'a'}
              fontSize={'lg'}
              fontWeight={400}
              variant={'link'}
              >
              BURRITOS
            </Text>
            </Link>

            <Link to="/familyPage">
            <Text
              as={'a'}
              fontSize={'lg'}
              fontWeight={400}
              variant={'link'}
              >
              FAMILY DINNERS
            </Text>
            </Link>
            

            <Link to="/">
            <Text
              as={'a'}
              fontSize={'lg'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              CHICKEN MEALS
            </Text>
            </Link>
            

            <Link to="">
            <Text
              as={'a'}
              fontSize={'lg'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              FIRE GRILLED COMBOS
            </Text>
            </Link>
            

            <Link to="">
            <Text
              as={'a'}
              fontSize={'lg'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              BOWLS
            </Text>
            </Link>
            

            <Link to="">
            <Text
              as={'a'}
              fontSize={'lg'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              MEALMOVER FIT MENU
            </Text>
            </Link>
            

            <Link to="">
            <Text
              as={'a'}
              fontSize={'lg'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              STREET TACOS
            </Text>
            </Link>
            

            <Link to="">
            <Text
              as={'a'}
              fontSize={'lg'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              KIDS MEALS
            </Text>
            </Link>
            

            <Link to="">
            <Text
              as={'a'}
              fontSize={'lg'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              EXTRAS
            </Text>
            </Link>
            
          </Flex>
    
    </>
  }
  
  
  
  