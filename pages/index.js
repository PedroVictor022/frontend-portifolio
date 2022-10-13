import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Layout/header";

export default function HomeApp() {
  return (
    <Box bg="gray.900" maxW="100%" maxH="100%" h="100vh" p='0'>
      <Header />
    </Box>
  )
}
