import React from "react";

// Libary
import { Box, Text, Image, Flex, Input } from "@chakra-ui/react";

// Import Assets
import ImageHero from "../../../assets/images/quran.webp";

export const Jumbotron = () => {
  return (
    <Box>
      <Box
        rounded={"3xl"}
        shadow={"xl"}
        bg={"gray.400"}
        h={{ base: 360, md: 300, lg: 300 }}
        w={{ base: "100%", md: "100%", lg: "100%" }}
        position={"relative"}
      >
        <Image
          src={ImageHero}
          objectFit={"cover"}
          w={{ base: "100%", md: "100%", lg: "100%" }}
          h={"full"}
          rounded={"2xl"}
        />
        <Box
          position={"absolute"}
          top={0}
          bg={"rgba(77, 77, 77, 0.61)"}
          w={{ base: "100%", md: "100%", lg: "100%" }}
          height={"100%"}
          rounded={"2xl"}
        >
          <Flex
            mx={{ base: 30, md: 100, lg: 100 }}
            my={5}
            flexDir={"column"}
            gap={4}
          >
            <Text color={"white"} fontWeight={"bold"} fontSize={55}>
              Al-Qur'an
            </Text>
            <Text color={"white"} fontWeight={400} fontSize={16}>
              Diriwayatkan dari Abu Umamah al-Bahili, Rasulullah SAW bersabda,
              "Bacalah Alquran, maka sesungguhnya ia akan datang di hari kiamat
              memberi syafaat kepada pembacanya".
            </Text>
            <Flex flexDir={"column"} gap={1}>
              <Input
                placeholder="Cari Surat Al-Quran disini"
                variant={"filled"}
                _focus={{ bg: "white" }}
              />
              <Text color={"white"} fontWeight={400} fontSize={15}>
                Hasil pencarian tentang:{" "}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
