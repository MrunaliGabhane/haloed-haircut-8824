import { Box, Button, Grid, Text ,Image} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
// import data from "../data.json";
// import Slider from "../components/Slider";

import Carousel from "../components/Slider";
import FoodCard from "../components/FoodCard";
import { cardData } from "../constants/BurritosData";
//import Carousel from "./CarosualPage";
export default function HomePage(){

    let nav = useNavigate()


    return <Box>
      <Carousel/>
{/* <Box>
   
   <Slider start={data.banner.start} />
 </Box> */}
{/* <img src="https://www.elpolloloco.com/content/img/chicken-leg_1280.webp"/>
<img src="https://www.elpolloloco.com/content/img/our-food_1280.webp"/>
<Button background={'blue'} color={'white'} fontSize={'2xl'} padding={'5px'}  margin={'auto'} display={'flex'} justifyContent={'center'} paddingTop="-50%">
<Text position="absolute" top="20px" left="20px" fontSize="xl">
        Text to write on image
      </Text>


</Button> */}
<Box>

    <Image src="https://www.elpolloloco.com/content/img/chicken-leg_1280.webp"/>
      <Image src="https://www.elpolloloco.com/content/img/our-food_1280.webp" />
      <Text position="absolute" top="62%" left="45%" color='red' fontWeight="bold" fontSize="50px" >
        OUR FOOD
      </Text>
      <Text position="absolute" top="65%" left="41%" width="25%" fontWeight='bold' fontSize="1.5xl" textAlign="center" >
      Streeped in tradition. Filled with freshness. Our menu is the intersection of our Sinaloan roots and our Socal hometown.
      </Text>
      
      <Button _hover={{ bg: "red", color: "white" }} position="absolute" top="69%" left="49%" fontSize="xl"  color={'white'} background={'blue'}>
        <Link to="/allPage">
        VIEW MENU
        </Link>
      </Button>
    </Box>
{/* <Grid gridTemplateColumns={{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",lg:"repeat(3 , 1fr)"}}>
      {cardData.map((el)=><FoodCard {...el}/>)}
      </Grid> */}
     
     {/* <Link to={"/ourfoodpage"} >Got to our food page</Link> */}

     {/* <Button onClick={()=>{
        nav("/ourfoodpage")
     }}>Go to food page</Button> */}


    </Box>
}