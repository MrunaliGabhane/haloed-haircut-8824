import { cardData } from "../constants/ChickenData"
import FoodCard from "../components/FoodCard"
import { Box , Text,Grid} from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Button } from "@chakra-ui/button"
export default function ChickenPage(){
    return <Box>
        <Image width={'100%'} height={'150px'} src="https://www.elpolloloco.com/content/img/hero/Tiles-Mobile.png"/>
        <Text fontStyle={"italic"} color={"red"} fontSize={"60px"} textAlign={"center"} fontWeight={"bold"} padding={"10px"}>CHICKEN MEAL</Text>
        <Grid gridTemplateColumns={{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",lg:"repeat(3 , 1fr)"}}>
      {cardData.map((el)=><FoodCard {...el}/>)}
      </Grid>
      <Image src="https://www.elpolloloco.com/content/img/order-now_768.webp" ></Image>
      <Text position="absolute" top="59%" left="35%" color='red' fontWeight="bold" fontSize="47px" fontStyle={"italic"} >
      PERFECT POLLO IS
      </Text>
      <Text position="absolute" top="61%" left="33%" color='red' fontWeight="bold" fontSize="47px" fontStyle={"italic"} >
      JUST A CLICK AWAY .
      </Text>
      <Text position="absolute" top="64%" left="36%" fontWeight="bold" >
      Order online for quick pick up or delivery where
      </Text>
      <Text position="absolute" top="65%" left="48%" fontWeight="bold" >
      available.
      </Text>
      <Button position="absolute" top="67%" left="46%" fontWeight="bold" background={"blue"} color={"white"}>ORDER NOW</Button>
    </Box>
}