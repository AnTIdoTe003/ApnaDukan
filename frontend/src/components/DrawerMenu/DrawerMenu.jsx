import React from "react";
import { BsMenuButtonFill } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import { BiMinus } from "react-icons/bi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>
        <BsMenuButtonFill
          style={{ color: "#ff8f9c", fontSize: "2rem" }}
        ></BsMenuButtonFill>
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader style={{ color: "#ff8f9c" }}>Menu</DrawerHeader>
          <DrawerBody>
            <Accordion  allowMultiple>
              <AccordionItem style={{backgroundColor:'transparent'}}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Mens
                        </Box>
                        {isExpanded ? (
                          <BiMinus style={{ fontSize: "12px" }} />
                        ) : (
                          <GrFormAdd style={{ fontSize: "12px" }} />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel  pb={4}>
                     <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                        <button>Shirt</button>
                        <button>Shorts</button>
                        <button>Jeans</button>
                        <button>Shoes</button>
                     </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem style={{backgroundColor:'transparent'}}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Women's
                        </Box>
                        {isExpanded ? (
                          <BiMinus style={{ fontSize: "12px" }} />
                        ) : (
                          <GrFormAdd style={{ fontSize: "12px" }} />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel  pb={4}>
                     <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                        <button>Dress</button>
                        <button>Jeans</button>
                        <button>Shorts</button>
                        <button>Shoes</button>
                     </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem style={{backgroundColor:'transparent'}}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Kids
                        </Box>
                        {isExpanded ? (
                          <BiMinus style={{ fontSize: "12px" }} />
                        ) : (
                          <GrFormAdd style={{ fontSize: "12px" }} />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel  pb={4}>
                     <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                        <button>Shirt</button>
                        <button>Shorts</button>
                        <button>Jeans</button>
                        <button>Shoes</button>
                        <button>Toys</button>
                     </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
            <Button bg={'transparent'}>Hot Offers</Button>
            <Divider></Divider>
          </DrawerBody>
          <Divider></Divider>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button color="white" bg={"#ff8f9c"}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
