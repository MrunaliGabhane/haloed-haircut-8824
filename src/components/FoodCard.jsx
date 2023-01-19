import { Badge, Box, Card, CardBody, color, Heading, Image, Modal, Wrap } from "@chakra-ui/react"
import NutriModal from "./NutriModal"

export default function FoodCard({name,src,nutriImage,newBadge}){

    return <Box >

        <Card padding={4}>
            <CardBody>
                <Image w={"100%"} src={src}></Image>
            </CardBody>
        </Card>
        <Wrap><Badge display={newBadge?"block":"none"} colorScheme={"red"}>new</Badge><Heading size={"lg"}>{name}</Heading></Wrap>
        <NutriModal image={nutriImage} />


    
    </Box>
}