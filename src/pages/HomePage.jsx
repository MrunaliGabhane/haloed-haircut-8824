import { Box, Button, Grid } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { cardData } from "../constants/data";

export default function HomePage(){

    let nav = useNavigate()


    return <Box>


<Grid gridTemplateColumns={{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",lg:"repeat(3 , 1fr)"}}>
      {cardData.map((el)=><FoodCard {...el}/>)}
      </Grid>
     
     {/* <Link to={"/ourfoodpage"} >Got to our food page</Link> */}

     <Button onClick={()=>{
        nav("/ourfoodpage")
     }}>Go to food page</Button>


    </Box>
}