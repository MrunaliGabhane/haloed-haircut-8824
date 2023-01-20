import { cardData } from "../constants/familyData"
import FoodCard from "../components/FoodCard"
import { Box , Text,Grid} from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
export default function FamilyPage(){
    return <Box>
        <Image width={'100%'} height={'150px'} src="https://www.elpolloloco.com/content/img/hero/Tiles-Mobile.png"/>
        <Text fontStyle={"italic"} color={"red"} fontSize={"60px"} textAlign={"center"} fontWeight={"bold"} padding={"10px"}>FAMILY DINNERS</Text>
        <Grid gridTemplateColumns={{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",lg:"repeat(3 , 1fr)"}}>
      {cardData.map((el)=><FoodCard {...el}/>)}
      </Grid>
      <Image src="https://www.elpolloloco.com/content/img/order-now_768.webp"></Image>
    </Box>
}