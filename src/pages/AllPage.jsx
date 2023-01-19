import React from 'react';
import { Box, IconButton, Stack, useBreakpointValue,Grid,Card,Link } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { Image } from '@chakra-ui/react';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function AllPage(){
    return <Box>
      <Stack>
      <Image src="https://www.elpolloloco.com/content/img/hero/hero.jpg"/>
      <Image width={'100%'} height={'150px'} src="https://www.elpolloloco.com/content/img/hero/Tiles-Mobile.png"/>
      </Stack>
      <Stack>
        <Grid gridTemplateColumns={{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",lg:"repeat(2 , 1fr)"}}>
          <Card>
            <Image src="https://www.elpolloloco.com/content/img/menu/menu-burritos_1280.webp" />
            <Link color={'red'} fontSize={"30px"} fontWeight={"bold"} fontStyle={"italic"}
            textAlign={"center"} paddingTop={"10px"} paddingBottom={"10px"} to='/burritosPage' >BURRITOS</Link>
          </Card>
          <Card>
            <Image src="https://www.elpolloloco.com/content/img/menu/menu-family-dinners_1280.webp" />
            <Link color={'red'} fontSize={"30px"} fontWeight={"bold"} fontStyle={"italic"}
            textAlign={"center"} paddingTop={"10px"} paddingBottom={"10px"} to='/' >FAMILY DINNERS</Link>
          </Card>
          <Card>
            <Image src="https://www.elpolloloco.com/content/img/menu/ChickenMeals_Category_M1_2020_1160x870.webp" />
            <Link color={'red'} fontSize={"30px"} fontWeight={"bold"} fontStyle={"italic"}
            textAlign={"center"} paddingTop={"10px"} paddingBottom={"10px"} to='/' >CHICKEN MEALS</Link>
          </Card>
          <Card>
            <Image src="https://www.elpolloloco.com/content/img/menu/M4-ChickQuesCombo-1160x870.webp" />
            <Link color={'red'} fontSize={"30px"} fontWeight={"bold"} fontStyle={"italic"}
            textAlign={"center"} paddingTop={"10px"} paddingBottom={"10px"} to='/' >FIRE GRILLED COMBOS</Link>
          </Card>
          <Card>
            <Image src="https://www.elpolloloco.com/content/img/menu/M3-DblChickenTostada-1160x870.webp" />
            <Link color={'red'} fontSize={"30px"} fontWeight={"bold"} fontStyle={"italic"}
            textAlign={"center"} paddingTop={"10px"} paddingBottom={"10px"} to='/' >TOSTADAS</Link>
          </Card>
          <Card>
            <Image src="https://www.elpolloloco.com/content/img/menu/menu-bowls_1280.webp" />
            <Link color={'red'} fontSize={"30px"} fontWeight={"bold"} fontStyle={"italic"}
            textAlign={"center"} paddingTop={"10px"} paddingBottom={"10px"} to='/' >BOWLS</Link>
          </Card>
          <Card>
            <Image src="https://www.elpolloloco.com/content/img/menu/menu-under-500-calories_1280.webp" />
            <Link color={'red'} fontSize={"30px"} fontWeight={"bold"} fontStyle={"italic"}
            textAlign={"center"} paddingTop={"10px"} paddingBottom={"10px"} to='/' >MEALMOVER FIT MENU</Link>
          </Card>
          <Card>
            <Image src="https://www.elpolloloco.com/content/img/menu/M3-ChickenAvoTaco-1160x870.webp" />
            <Link color={'red'} fontSize={"30px"} fontWeight={"bold"} fontStyle={"italic"}
            textAlign={"center"} paddingTop={"10px"} paddingBottom={"10px"} to='/' >STREET TACOS</Link>
          </Card>
          <Card>
            <Image src="https://www.elpolloloco.com/content/img/menu/menu-kids-meals_1280.webp" />
            <Link color={'red'} fontSize={"30px"} fontWeight={"bold"} fontStyle={"italic"}
            textAlign={"center"} paddingTop={"10px"} paddingBottom={"10px"} to='/' >KIDS MEALS</Link>
          </Card>
          <Card>
            <Image src="https://www.elpolloloco.com/content/img/menu/tacos_tacoalcarbon_two_1160x870.webp" />
            <Link color={'red'} fontSize={"30px"} fontWeight={"bold"} fontStyle={"italic"}
            textAlign={"center"} paddingTop={"10px"} paddingBottom={"10px"} to='/' >EXTRAS</Link>
          </Card>
          <Card>
            <Image src="https://www.elpolloloco.com/content/img/menu/menu-sides_1280.webp" />
            <Link color={'red'} fontSize={"30px"} fontWeight={"bold"} fontStyle={"italic"}
            textAlign={"center"} paddingTop={"10px"} paddingBottom={"10px"} to='/' >SIDES, DRINKS & SALSAS</Link>
          </Card>
        </Grid>
      </Stack>
     
    </Box>
}


// export default function AllPage() {
//   // As we have used custom buttons, we need a reference variable to
//   // change the state
//   const [slider, setSlider] = React.useState<Slider | null>(null);

//   // These are the breakpoints which changes the position of the
//   // buttons as the screen size changes
//   const top = useBreakpointValue({ base: '90%', md: '50%' });
//   const side = useBreakpointValue({ base: '30%', md: '10px' });

//   // These are the images used in the slide
//   const cards = [
//     'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
//     'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
//     'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
//   ];

//   return (
//     <Box
//       position={'relative'}
//       height={'600px'}
//       width={'full'}
//       overflow={'hidden'}>
//       {/* CSS files for react-slick */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charSet="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />
//       {/* Left Icon */}
//       <IconButton
//         aria-label="left-arrow"
//         colorScheme="messenger"
//         borderRadius="full"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickPrev()}>
//         <BiLeftArrowAlt />
//       </IconButton>
//       {/* Right Icon */}
//       <IconButton
//         aria-label="right-arrow"
//         colorScheme="messenger"
//         borderRadius="full"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickNext()}>
//         <BiRightArrowAlt />
//       </IconButton>
//       {/* Slider */}
//       <Slider {...settings} ref={(slider) => setSlider(slider)}>
//         {cards.map((url, index) => (
//           <Box
//             key={index}
//             height={'6xl'}
//             position="relative"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize="cover"
//             backgroundImage={`url(${url})`}
//           />
//         ))}
//       </Slider>
//     </Box>
//   );
// }