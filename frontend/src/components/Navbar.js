import React from "react";
import { Box, Flex, Text, Button, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSignMessage } from "wagmi";

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 }
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
  //   message: 'gm wagmi frens',
  // })

  return (
    <Box bg="#131415" py={3} px={{ base: 4, md: 20 }}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontSize="3xl" fontWeight="bold" color="white">Logo</Text>
        </Box>
        <Box display={{ base: "block", md: "none" }} onClick={isOpen ? onClose : onOpen}>
          {isOpen ? <CloseIcon color="white" w={6} h={6} /> : <HamburgerIcon color="white" w={6} h={6} />}
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Flex alignItems="center">
            <Button  variant="ghost" mx={2} _hover={{ color: "gray.500" }} color="white">Home</Button>
            <Button variant="ghost" mx={2} _hover={{ color: "gray.500" }} color="white">About</Button>
            <Button variant="ghost" mx={2} _hover={{ color: "gray.500" }} color="white">Contact</Button>
            <ConnectButton/>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;