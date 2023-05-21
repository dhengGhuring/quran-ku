import React from "react";

// Libary
import {
  Box,
  Text,
  Image,
  Flex,
  Input,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center,
} from "@chakra-ui/react";

export const ModalDeskripsiSurat = ({ isOpen, onClose, detailSurah }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={{ base: "xs", md: "md", lg: "lg" }}
    >
      <ModalOverlay />
      <ModalContent rounded={"3xl"}>
        <ModalHeader roundedTopLeft={"3xl"} roundedTopRight={"3xl"}>
          <Center>
            <Text
              color={"black"}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              fontWeight={700}
            >
              {`Deskripsi Surat ${detailSurah?.name}`}
            </Text>
          </Center>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody my={{ base: 2, md: 4 }}>
          <Text
            color={"black"}
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            fontWeight={400}
            lineHeight={"taller"}
          >
            {detailSurah?.description}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
