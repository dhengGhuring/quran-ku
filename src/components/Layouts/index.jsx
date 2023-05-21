/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";

export default function index() {
  return (
    <Box maxW={"100%"} bg={"white"}>
      {/* <Container maxW={{ sm: "100%", md: "80%", lg: "80%" }}> */}
      <Outlet />
      {/* </Container> */}
    </Box>
  );
}
