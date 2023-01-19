import { cardData } from "../constants/BurritosData"
import FoodCard from "../components/FoodCard"
import { Box , Text,Grid} from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
export default function BurritosPage(){
    return <Box>
        <Image width={'100%'} height={'150px'} src="https://www.elpolloloco.com/content/img/hero/Tiles-Mobile.png"/>
        <Text>BURRITOS</Text>
        <Grid gridTemplateColumns={{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",lg:"repeat(3 , 1fr)"}}>
      {cardData.map((el)=><FoodCard {...el}/>)}
      </Grid>
    </Box>
}