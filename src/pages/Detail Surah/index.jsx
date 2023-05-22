import React, { useState, useEffect } from "react";

// Libary
import {
  Box,
  Text,
  Image,
  Flex,
  Input,
  Container,
  useDisclosure,
  Tooltip,
  Icon,
} from "@chakra-ui/react";

// Import Axios
import axios from "axios";

// Import React Router Dom
import { useParams } from "react-router-dom";

// Import Components
import { Navbar } from "../../components";
import { ModalDeskripsiSurat } from "./fragments/ModalDeskripsiSurat";

// Import Icons
import { IoCopy } from "react-icons/io5";

const index = () => {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [detailSurah, setDetailSurah] = useState([]);
  const [detailAyat, setDetailAyat] = useState([]);
  // get detail data with number of surah
  useEffect(() => {
    axios
      .get(`https://quran-api-id.vercel.app/surahs/${id}`)
      .then((res) => {
        setDetailSurah(res.data);
        setDetailAyat(res.data["ayahs"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(detailAyat, "detailAyat");

  return (
    <Box>
      <ModalDeskripsiSurat
        isOpen={isOpen}
        onClose={onClose}
        detailSurah={detailSurah}
      />
      <Navbar detailSurah={detailSurah} onOpen={onOpen} />
      <Container maxW={{ sm: "100%", md: "80%", lg: "80%" }}>
        {detailAyat.map((item) => (
          <Box key={item.number.inSurah} my={50} mt={200}>
            <Flex flexDir={"column"} gap={10} my={10}>
              <Text color={"black"} className="arab" fontSize={30}>
                {item?.arab}
              </Text>
              <Flex flexDir={"column"} gap={3}>
                <Box
                  border={"1px"}
                  w={"fit-content"}
                  px={2}
                  borderColor={"gray.300"}
                  rounded={"md"}
                >
                  <Text>{item?.number.inSurah}</Text>
                </Box>
                <Tooltip label="Salin Ayat & Arti" hasArrow rounded={"2xl"}>
                  <Flex
                    cursor={"pointer"}
                    border={"1px"}
                    w={"fit-content"}
                    p={2}
                    borderColor={"gray.300"}
                    rounded={"md"}
                    alignItems={"center"}
                    justifyItems={"center"}
                    // function copy text
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${item?.arab} ${item?.translation}`
                      );
                    }}
                  >
                    <Icon as={IoCopy} w={3} h={3} />
                  </Flex>
                </Tooltip>
              </Flex>
              <Text color={"black"} fontSize={18}>
                {item?.translation}
              </Text>
            </Flex>
            <hr />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default index;
