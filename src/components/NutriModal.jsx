import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Image,
    Text
  } from '@chakra-ui/react'
  


  export default function NutriModal({image}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
      <Text textAlign={"center"}>
      <a  onClick={onOpen}>Nutrition info</a>
      </Text>
  
        <Modal size={"4xl" } isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent><ModalHeader>Nutrition Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             
             <Image w="100%" src={image}></Image>

            </ModalBody>
  
            <ModalFooter>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }