/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

// Libary
import { Box, Text, Image, Flex, Input, Container } from "@chakra-ui/react";

// Import Assets
import { Jumbotron } from "./Sections/Jumbotron";
import { CardListAyat } from "./Sections/CardListAyat";

// Import Axios
import axios from "axios";
import { Footer } from "../../components";

const index = () => {
  const [dataSurah, setDataSurah] = useState([]);
  const [querySearch, setQuerySearch] = useState("");

  // get data from API in useEffect
  useEffect(() => {
    axios
      .get("https://quran-api-id.vercel.app/surahs")
      .then((res) => {
        setDataSurah(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container maxW={{ sm: "100%", md: "80%", lg: "80%" }}>
        <Box w={{ base: "100%", md: "100%", lg: "100%" }} my={50}>
          <Jumbotron
            querySearch={querySearch}
            setQuerySearch={setQuerySearch}
          />
          <CardListAyat querySearch={querySearch} dataSurah={dataSurah} />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default index;
