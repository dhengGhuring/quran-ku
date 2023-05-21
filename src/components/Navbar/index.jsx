import React from "react";

// Libary
import {
  Box,
  Text,
  Image,
  Flex,
  Input,
  Button,
  Container,
  Icon,
} from "@chakra-ui/react";

// Import Icons
import { BsArrowLeftSquareFill } from "react-icons/bs";

// Import React Router Dom
import { useNavigate } from "react-router-dom";

const index = ({ detailSurah, onOpen }) => {
  const navigate = useNavigate();
  return (
    <Box
      p={2}
      position={"fixed"}
      bg={"transparent"}
      w={"100%"}
      shadow={"md"}
      top={0}
      style={{ backdropFilter: "blur(5px)" }}
      border={"1px"}
      borderColor={"gray.300"}
    >
      <Container maxW={{ sm: "100%", md: "80%", lg: "80%" }}>
        <Flex
          gap={3}
          w={"full"}
          justifyContent={{
            base: "start",
            sm: "space-between",
            md: "space-between",
          }}
          alignItems={{ base: "start", sm: "center", md: "center" }}
          flexDir={{ base: "column", sm: "row", md: "row" }}
        >
          <Flex gap={10} alignItems={"center"}>
            <Button colorScheme="blue" size={"lg"}>
              <Icon as={BsArrowLeftSquareFill} w={5} h={5} />
              <Text
                ms={3}
                onClick={() => {
                  navigate(-1);
                }}
              >
                KEMBALI
              </Text>
            </Button>
            <Flex flexDir={"column"}>
              <Text color={"black"} fontWeight={700} fontSize={20}>
                {detailSurah.name}
              </Text>
              <Text
                color={"gray.500"}
                fontWeight={400}
                fontSize={14}
              >{`${detailSurah.translation} | ${detailSurah.numberOfAyahs}  | ${detailSurah.revelation}`}</Text>
            </Flex>
          </Flex>
          <Flex>
            <Button onClick={onOpen} variant={"outline"} colorScheme="blue">
              Deskripsi
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default index;
