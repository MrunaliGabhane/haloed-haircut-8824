import { Badge, Box, Card, CardBody, color, Heading, Image, Modal, Wrap,Flex,Stack } from "@chakra-ui/react"
import NutriModal from "./NutriModal"

export default function FoodCard({name,src,nutriImage,newBadge}){

    return <Box >
        <Card margin={"20px"}>
        <Card padding={4}>
            <CardBody>
                <Image w={"80%"} src={src}></Image>
            </CardBody>
        </Card>
            <Stack>
            <Badge width={"40px"} display={newBadge?"block":"none"} background={"red"} color={"white"}>new</Badge>
            </Stack>
            <Stack>
            <Heading fontSize={"17px"} >{name}</Heading>
            </Stack>
        <NutriModal image={nutriImage} />
        </Card>
        
    </Box>
}