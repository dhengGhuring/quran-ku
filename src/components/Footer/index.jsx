import React from "react";

// Libary
import {
  Box,
  Text,
  Image,
  Flex,
  Input,
  Container,
  IconButton,
} from "@chakra-ui/react";

// Import Icons
import { BsInstagram, BsFacebook } from "react-icons/bs";

const index = () => {
  return (
    <Box
      p={1}
      w={"100%"}
      shadow={"md"}
      bottom={0}
      border={"1px"}
      borderColor={"gray.300"}
    >
      <Container maxW={{ sm: "100%", md: "80%", lg: "80%" }}>
        <Flex
          gap={1}
          w={"full"}
          justifyContent={{
            base: "start",
            sm: "space-between",
            md: "space-between",
          }}
          alignItems={{ base: "start", sm: "center", md: "center" }}
          flexDir={{ base: "column", sm: "row", md: "row" }}
        >
          <Flex alignItems={"center"}>
            <Flex flexDir={"row"}>
              <Text color={"black"} fontWeight={400} fontSize={13}>
                Copyright &copy;2023 - Made with ❤️ by dhengghuring
              </Text>
              {/* <Text color={"gray.500"} fontWeight={400} fontSize={14}></Text> */}
            </Flex>
          </Flex>
          <Flex gap={2}>
            <a
              href="https://www.instagram.com/_dhengghuring/?hl=id"
              rel="noreferrer"
              target="_blank"
            >
              <IconButton icon={<BsInstagram />} size={"sm"} />
            </a>
            <a
              href="https://www.facebook.com/ridho.ananta.54"
              rel="noreferrer"
              target="_blank"
            >
              <IconButton icon={<BsFacebook />} size={"sm"} />
            </a>
            {/* <IconButton icon={<SearchIcon />} /> */}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default index;
