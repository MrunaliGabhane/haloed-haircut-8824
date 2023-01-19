import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Button,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Image,
  } from '@chakra-ui/react'
  


  export default function NutriModal({image}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <a onClick={onOpen}>Nutrition info</a>
  
        <Modal size={"4xl" } isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
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