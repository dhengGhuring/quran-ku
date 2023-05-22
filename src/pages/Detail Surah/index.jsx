import React, { useState, useEffect, useRef, createRef } from "react";

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
  Button,
} from "@chakra-ui/react";

// Import Axios
import axios from "axios";

// Import React Router Dom
import { useParams } from "react-router-dom";

// Import Components
import { Navbar } from "../../components";
import { ModalDeskripsiSurat } from "./fragments/ModalDeskripsiSurat";

// Import Icons
import { IoCopy, IoPauseCircleSharp } from "react-icons/io5";
import { IoMdPlayCircle } from "react-icons/io";

const index = () => {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [detailSurah, setDetailSurah] = useState([]);
  const [detailAyat, setDetailAyat] = useState([]);

  // function play audio
  const AudioPlayer = ({ audioUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.createRef();

    const toggleAudio = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

    return (
      <div>
        <Flex
          cursor={"pointer"}
          border={"1px"}
          w={"fit-content"}
          p={2}
          borderColor={"gray.300"}
          rounded={"md"}
          alignItems={"center"}
          justifyItems={"center"}
          onClick={toggleAudio}
        >
          {isPlaying ? (
            <Icon as={IoPauseCircleSharp} />
          ) : (
            <Icon as={IoMdPlayCircle} />
          )}
          <audio ref={audioRef} src={audioUrl} />
        </Flex>
      </div>
    );
  };

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
              <Flex flexDir={"column"} alignItems={"start"}>
                <Flex flexDir={"column"} alignItems={"center"} gap={3}>
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
                  <AudioPlayer audioUrl={item.audio.minshawi} />
                </Flex>
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
