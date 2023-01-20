import React from "react"
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
  import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { Input } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import MealMover from "../assets/MealMover.png"
// function map(){
//   return <div>
//     <AspectRatio ratio={16 / 9}>
//   <iframe
//     src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
//   />
// </AspectRatio>
//   </div>
// }
  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='white' onClick={onOpen}>
          <img width={"40px"} height={"40px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFaSCaumIeTwdA03PAAbbxXOnskAIyBNRmog&usqp=CAU"/>
        </Button>
        <Drawer
         size={"xl"}
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
          <DrawerBody fontSize={"40px"} fontWeight={'bold'} color={'red'}
          fontStyle={'italic'}
          >
              <Text > HOME</Text>
              <Text > <Link to='/ourFoodPage'>OUR FOOD</Link></Text>
              <Text > <Link to='/cateringPage'>CATERING</Link></Text>
              <Text> LOCO REWARDS</Text>
              <Text> GIFT CARDS</Text>
              <Text> 
              THIS IS L.A. MAX</Text>
              <Text> OUR STORY</Text>
              <Text>CAREERS</Text>
              <Text> 
              FRANCHISING</Text>
              
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
             
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box 
      >
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          // minH={'60px'}
          // py={{ base: 2 }}
          // px={{ base: 4 }}
          // borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          justifyContent={'space-between'}>
          <Flex
            // flex={{ base: 1, md: 'auto' }}
            // ml={{ base: -2 }}
            // display={{ base: 'flex', md: 'none' }}
            >
             {<DrawerExample/>}
            {/* <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            /> */}
          </Flex>
          <Flex>
            <Text color={'red'} fontSize={'30px'} fontWeight={'bold'} fontStyle={'italic'}>
              MealMover
            </Text>
          </Flex>
          <Flex 
      
          // flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}
          >
           
                          <img width={'40px'} height={'55px'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAxlBMVEX////fICf+/v7MISftSkPeAADfISjfHSXeAA3gLjXfIyreDhneABDuTUXsR0HOLTLeFR7gKTDJAADoPDngMDjeAAfeCRX77+721NTSISbLGiHMJCnpdnj0v8DnaWrqg4TlX2H20M/xsrPtmJnwqar+9fTkT1LtVE/64+PKEhrKCRTWWVvqgYPrtbXvnJ3tjpDiP0TlWVz30tL1xsXjRkrcaWnZb3HegYPnnZ7RP0Lxrq753t3jj4/mVVjUTU/deXrQOTrUSEpkqI1RAAAMsElEQVR4nO1daXujOBKOISADPsD4ih3HcTtOJ9lMjnHv7kwyvdP7///UInEYZGGkEmApz77PTM98aNn1ukp1qQQXF4rCMPA/gFXaICIIWHMBWHUmGDBZteF3ATJRYtn1y9IIwOamzz40DH1kBeFrswPuQW1AnIUuBMFy6kEQaGg6xWyArWkUzoi3ByyCLTsPQPFMJycKlVUrgtoIC4BWDgMCnXYTBF+bHYEuFCXE1ISiAekixA5UD4Igd6ERvTipBDDUJ0zAJDW02YNQQfXR4BdPuTCU52dIJYZaKFBCRi28BbDjf1itPuQ0WKMgjUBiBybWqTpFqU2kQUAD5cvZYvX1J+foNagLpBSoBzTYRgRAU9ODXAxQda0Vxa+vRNCcjEb8QMrQ6FwfPmVRsyCNQithhaGNsUFgaOcwvi6AvcaH+erl9fn6+vr59WU1f1BYmQDHbWxebt9Q10NTz/d9z5t2J/749mWjLEsxwYzVjed1giDodOxOBoT8ade/WSlIUrB3//k8nfjIdiLk+KU0/cl0/dmcrDCIpMDG/tbyUEQlcFxnfMwQk/Ss232T8opDQH+b964f83ADx3E7rhsQuJGNogNJv/u+aU5eUQgkXbubnp9tOjcMB5cR+v0+/s8gDN0cSb93s2tUbG6IdNM/Jl5Czw4GMa8C+pdh0MlIepNv9UgolxIKjMnMbqxEeje8PKaXkXRTjsi6mcnIlsko008V+IE2QaxAFKmvQGmQ4DLRav/A0Qt+h4qWF1JKidxrP3pEbOQe+PX7gzBwbTs2TNt2gzCx3Ywj6tVjqTAYIia+TSw0POgP77mc+ySIWWI9phQnW1kxoZl9Qo5z9dqKDTSjN8i5lAJDGztZrN5UjdYrTMBUTnDpInTmlhBMFdgvxAUWUazIVI3WGijihdweFPFPWyu20ITfoIIf/jHs8GCpFtxQZYpPgTBxNyGCDpLoHlTRSzgO+mHy/5MPmITSDXHO1fsJSgni/cVDL+YYRH+ZJK52F5LCtdaLmxGXYQ+SHchNkESWAerYUYbuB4DQ39pM67uXafCS00IPCEMUBM448G+FvrPVEymyCVHiZJjF0kk1xhTdjnUn9K0tjuw+4E2YhAnWFkS+1+t2uz3PZ2sXhW+4yOqgrpCdtti/u8U26pYQRF7PeV9/rParj/W70/MYJG0njMtk/0bka9vT4b6LpRswTRR1nfXmUAPuNuugS3FEUZXsJM6pK1L2t9aENe79bBO6FMGpe0eXuLs7d1rUIO4DBPFK/17BDtXFCrsZl4QJyosia80q4XdrK/f3XMfB7bgE1qp1+avxA/csiArDIkHfLovhm07axyEEc5r3f7QqOxc2OB8lbobyMt5buWecjWOKjjt2cxrESlSoOZXgFu/CAe5YFCTt+G+nmkyzNx83ip2xTbVTxdxpG5hhFQbfv3+nbNR3Tse2WeDbgR15Gdr7Wop03zLc9bAKI4bfC34UTecVC+co2oF4J1LogWqMBoFDRacfESyqsPdSufLFxpnaEfz7FqQWwEOUiKFxRLBfsDb0xrF27IwZDJFfS3exNqy6UcTuH+1Ciyc32fvOMcEor1ErJD57ncDBfsbNM+RSYaREZiLuPTcssxju/aiy+35JVfVdPm+BvZTqG3GGT5Vw2VQ00infVpoxGSJXpY346QdjJ6RTbv+dc/lPn0VxotLZ6cqPksqQTtg83v7u2qPI2a7bjKsBt3Nepg6pDItG2uU9h/hGmylhOK2OpaIAPnwqKkDXNsIdNqq7ZvGa2dxiMfQk+t81Im7jXfukNOwXk+7eA+eHfHZZ+9C7rl9Y0LVKjJuYIdW88HgZPtD7kMD/p6gwHMKCRluNuHTCtSECMpwyGf5DWJoqUcGDn8Z7zHBQZNjl3YefExZDVDNDqcOpRIdU+2LC2zHbMxk+1stQrjWe7EOKIbe7f2Fa6eO/CgLCuvdpp1H2GnaUeDMY+rzO8JqV07iP/6aEFZcrZWVIP21li5UwuMzCYexTUcDXidi5rOLi6umPgrCwZ/oclgsvLgBvJDTIDnJJwO5wN8z2dMAnMEf5bQxTgZGenUo3mLG7R2HG0E0YcprpNSscuuZjPtjARDSMup7/tntDmGEaLWw7Cf0WTwE0Y6rwavFnTjA5JdRxRICdadAf0PuJq05nqtA2i65UAvUcgXxE1YF9eXkkqFXVTGSk3bEKzaffMhFbGkI4iU+PuJqjc1//R9WnG2/M8tc0Hz9T8dQ4h8LdpLB/3BWcHuyULegzM9q75uLPtkTnxCuO+f3wOLB1k8SmxN2/MAunyEgf/yKr1NHh7xY2UwbDjkUoGuynV+MJqih60tbtmuZonm5ANQheXODpg+DY1XSSWTW2pGQGzk7DZ06FS3NxIZ9M1gtsph3qZC1B753E7iNZP3/G/RmbJmib5lNspCrdk/q04okYBkPbQ9vjDHW39ZleFKswMlLsSdXSITnlttmTbK6DnG0xvXnYdqZlM1ORChf/OROLU7jDXjFkmakbjB3Xt962+xlOFI3ZfvtmlfIjKnw650B0GWZkkJQxrZdOWaDpxPICJ/CsyQl6RIWmqVJHPwPJLwPKa7j4uoyTaRahyoFarMLHv89NhokNNlNEzdI4kdKOgsFJYBU+VaezDaDaqZGJGupEPhjbrDPs0yo8k5+pZkgfP9gdfJ2LecBbDher8LfK76ofPNmTQe0xZ+w4hWuVPMBuxjxDEOQr0bbFOsHJ+xg+oCuswj+qv6oB8Pysu0Ix6+JrlYIMIxtdmqP2h4W4i+ziUWcUCAU3YeRHl0u6T9oGuEuYB6raE531vsIMn3gPdHICSnc5uD+A2VXihrs0QdFelqDI+jlzrIITJF0DRXvJO4dCy2/KKiIOEIKP4ueiUj1t4cVVSrTLU7gruAoldCj+87yfVmI5Q5cQXAirUO4hdYA+ELvBW80w3oSkASUopczNUdAOZg84VSImuBA995V8Gi1oWYUSS3CVqFBw0kvuVh7014G404SgoCMlT3ho5XZ6EXN2G/sEUELQfBId1jtTJ040sQmc4TJWoeCB2tk6jZ+si2nlcJ3hr+GQqJA/IzWAsxk14VlMicthTFCkqDhzs3h2sltIY5gQNJ8EWojnboa/Mg8FywguE4J/CXzDuV9HtONWoh0p8FfiSEUkPvv7eu54I4aJbZR40pGKjfxylJzOM0w04WcWhkt0wIpDiXZnmYQJrEK1rshwoDoBDwLsZJZJvlb3MGnzqM7d3IhfqsEznVRwoiQ04dzNLm+2BcFVxC/RoKqHTQlKns8zs1DneMoi5ec446W5TAmaIyXPCxOU1qDbHmPKImU4Hh8s9Gx9fD6U579GgI6mLFI4V8Mcw8VQ4UhxqouwKq32bSfKZDITLc7KqoaTfZLbsoiBD2AOBAEt0tZQkRvOSwpF2yxAuLKvT0Ke9Sc/gT14SBNs9KxJqlFV/QvtWM/aoQiaj40eF0o1qjiq0G8MZ0MRHDV6aB/rAEqTpwa9p50NrcGG5y4MA9rx4O0DzSenCQr3gIWEzP4F3DrkXkQ5G5pgo24mFhPY+OfukuzyQ1JHGlwMm3Qz6a0uyI0pgUXf0jLKtl2aYJOzQbKdHIHVaS1s2+aSVmFjdW/OMptvWT1YaapGEzRHlU1uaF+03V7ca3zyfUywskPKHvCvWhQ7+jbLFQNfNzlyMpGN/uKQQubSYXvYT1gEOYomkC7OcqRx7TEIcvRmQLupbRMlmLFsdMHRm4G6mfbxMQKEwrMoA4yfC9FQqNvbDh9oJVaHQq34RXgpUqzoH+qmQAzjPm+ni/9W3i1tRSpp5APT/CmvwlPHFApdq+TBwRu+HiieStcMHV76msdB0t0wtdOT6ZpeMaJYR25SZzM69TYSpW5VVuBoM/0d2+nJzoX8Y0jOidhOK89htOHHUMV+xFVS6IzITptt4reHkr20Gz422l1rD6VbaTNS7zHWIJS7w3NcLSwHrFvceh9IAiCGmnAjABLUJ2sGvwFdGxOFqkKbpEsDMeVOXuqSojFIvsTq7EPGHJBo5bT2ii85SPlsPRy+pJHWJkczgN/K08NAYQeL+dWqQ6rfqIkXlVqsOMOSZ9uJfEBtsjQF9SUkgHrCCy2UgAGssrRq+MNO6BsQJPno2j8R+JoCnRQIGfnUZAtqpgwQwC9i+D/UgIZDCGLQIfGVxJfmV9dz/NsALJ41IEhjAPfD6xakOYCyZo18DOyNITrpUHllyMmnfsolKaDy+pPeD+ozlH3GmfKQ7cWpz1GiGa5BN1XOD2qgPkmC6kcJWRNTPusysj+gH6A4QR1ykQwSvkIHyIwg1CpIc4C9tlcXdhjAMxv2ov8B5Mehl9x+ILgAAAAASUVORK5CYII="/>
            


            <Button _hover={{ bg: "blue", color: "white" }} background={'red'} color={'white'}><Link to='/orderNowPage'>Place Order</Link></Button>
            {/* <Text
              // textAlign={useBreakpointValue({ base: 'center', lg: 'center' })}
              // fontFamily={'heading'}
              // color={useColorModeValue('gray.800', 'white')}
              >
              Logo
            </Text> */}
           
            {/* <Flex display={{ base: 'none', lg: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex> */}
          </Flex>
  
          {/* <Stack
            // flex={{ base: 1, md: 0 }}
            // justify={'flex-end'}
            // direction={'row'}
            // spacing={6}
            flexDirection={'right'}
            > */}
            {/* <Button
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
            </Button> */}
            {/* <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={600}
              color={'white'}
              bg={'red.400'}
              href={'#'}
              _hover={{
                bg: 'blue',
              }}>
              Order Place
            </Button> */}
          {/* </Stack> */}
        </Flex>
  
        {/* <Collapse in={isOpen} animateOpacity>
         
        </Collapse> */}
      </Box>
    );
  }
  
  // const DesktopNav = () => {
  //   const linkColor = useColorModeValue('gray.600', 'gray.200');
  //   const linkHoverColor = useColorModeValue('gray.800', 'white');
  //   const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
  //   return (
  //     <Stack direction={'row'} spacing={4}>
        
  //         <Box >
  //           <Popover trigger={'hover'} placement={'bottom-start'}>
  //             <PopoverTrigger>
  //               <Link
  //                 p={2}
                 
  //                 fontSize={'sm'}
  //                 fontWeight={500}
  //                 color={linkColor}
  //                 _hover={{
  //                   textDecoration: 'none',
  //                   color: linkHoverColor,
  //                 }}>
                 
  //               </Link>
  //             </PopoverTrigger>
  
              
  //               <PopoverContent
  //                 border={0}
  //                 boxShadow={'xl'}
  //                 bg={popoverContentBgColor}
  //                 p={4}
  //                 rounded={'xl'}
  //                 minW={'sm'}>
  //                 <Stack>

  //                 </Stack>
  //               </PopoverContent>
              
  //           </Popover>
  //         </Box>
       
  //     </Stack>
  //   );
  // };
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
  
  
  
  