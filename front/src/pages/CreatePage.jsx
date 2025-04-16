import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Container, Heading, VStack } from "@chakra-ui/react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  return (
    <Container>
      <VStack>
        <Heading as={"h1"}>Create a new product</Heading>
        <form>
          <label>Product Name:</label>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <br />
          <br />
        </form>
      </VStack>
    </Container>
  );
};

export default CreatePage;
