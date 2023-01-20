import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  export default function OrderNowPage() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex padding={"20px"}>
          <Link to=""></Link>
          <Button to="" margin={"10px"} background={"blue"} _hover={{background:"red"}}>Sign In</Button>
          <Button margin={"10px"} background={"blue"} _hover={{background:"red"}}>Register</Button>
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'} color={'blue'} fontStyle={'Italic'} >WELCOME TO MEALMOVER</Heading>
            <Heading fontSize={'2xl'} color={'Black'}  >HOW DO YOU WANT YOUR ORDER?</Heading>
            <FormControl id="pickup">
              <FormLabel>Pickup Type</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="time">
              <FormLabel>Delevery Timing</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="address">
              <FormLabel>Address, City and State, or Postal Code</FormLabel>
              <Input type="text" />
            </FormControl>
            <Stack spacing={6}>
              
              <Button colorScheme={'blue'} >
                Order Start
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://static.olocdn.net/img/elpolloloco/hero/mobile.png?v=1673988380'
            }
          />
        </Flex>
      </Stack>
    );
  }