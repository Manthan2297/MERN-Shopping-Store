import React from "react";
import {
  Button,
  Container,
  DarkMode,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to="/create">
            <Button variant={"outline"}>
              <CiSquarePlus fontSize={25} />
            </Button>
          </Link>
          <Button onClick={DarkMode} variant={"outline"}>
            <MdOutlineDarkMode fontSize={25} />
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
