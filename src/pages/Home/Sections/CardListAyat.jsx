import React from "react";

// Libary
import { Box, Grid, GridItem, Text, Flex, Button } from "@chakra-ui/react";

// React Router Dom
import { Link } from "react-router-dom";
export const CardListAyat = ({ dataSurah, querySearch }) => {
  console.log(querySearch, "querySearch");
  return (
    <Box my={10}>
      <Grid
        templateColumns={{ md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
        gap={6}
      >
        {dataSurah
          .filter((qf) => {
            if (!querySearch) {
              return qf;
            } else if (
              qf.name.toLowerCase().includes(querySearch.toLowerCase())
            ) {
              return qf;
            }
            return false;
          })
          .map((item, index) => (
            <GridItem key={index}>
              <Box
                shadow={"md"}
                w={"full"}
                p={6}
                border={"1px"}
                borderStyle={"dashed"}
                borderColor={"gray.300"}
                rounded={"2xl"}
                _hover={{ borderColor: "black" }}
              >
                <Flex flexDir={"column"} gap={5}>
                  <Flex flexDir={"column"} gap={2}>
                    <Text color={"black"} fontWeight={700} fontSize={20}>
                      {item.name}
                    </Text>
                    <Text color={"black"} fontWeight={400}>
                      {item.translation}
                    </Text>
                  </Flex>
                  <Flex flexDir={"column"} gap={3}>
                    <Flex flexDir={"row"} gap={2}>
                      <Box
                        borderStyle={"solid"}
                        borderColor={"black"}
                        border={"1px"}
                        p={1}
                        rounded={"full"}
                        w={50}
                      >
                        <Text textAlign={"center"}>{item.numberOfAyahs}</Text>
                      </Box>
                      <Box
                        borderStyle={"solid"}
                        borderColor={"black"}
                        border={"1px"}
                        p={1}
                        rounded={"full"}
                        w={100}
                      >
                        <Text textAlign={"center"}>{item.revelation}</Text>
                      </Box>
                    </Flex>
                    <Link to={`/detail-surah/${item.number}`}>
                      <Button
                        bg={"rgb(50,64,83)"}
                        rounded={"full"}
                        color={"white"}
                        _hover={{ bg: "rgb(50,64,83)" }}
                        w={{ base: 150, md: 150, lg: 160 }}
                      >
                        Baca Sekarang!
                      </Button>
                    </Link>
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};
