import { Badge, Box, Card, CardBody, color, Heading, Image, Modal, Wrap,Flex,Stack,Text,Button ,Alert} from "@chakra-ui/react"
import NutriModal from "./NutriModal"

export default function FoodCard({name,src,nutriImage,newBadge,price}){

    return <Box >
        <Card margin={"30px"}>
        
            <CardBody padding={4}>
                <Image w={"100%"} src={src}></Image>
            </CardBody>
        
            <Stack>
            <Badge width={"40px"} display={newBadge?"block":"none"} background={"red"} color={"white"}>new</Badge>
            </Stack>
            <Stack>
            <Heading fontSize={"17px"} textAlign={"center"}>{name}</Heading>
            <Text fontSize={"17px"} textAlign={"center"}>Price:- {price}</Text>
            </Stack>
        <NutriModal  image={nutriImage} />
        <Button _hover={{background:"blue"}} background={"red"} >Add to Cart</Button>
        </Card>
        
    </Box>
}