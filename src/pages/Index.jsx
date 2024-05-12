import React, { useState } from "react";
import { Container, VStack, Box, Image, Text, Button, SimpleGrid, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Médaillon Classique",
    price: "20€",
    image: "https://images.unsplash.com/photo-1516771317026-14d76f5396e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbWVkYWxsaW9ufGVufDB8fHx8MTcxNTQ4MzI1NHww&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Un médaillon classique pour garder vos souvenirs précieux.",
  },
  {
    id: 2,
    name: "Médaillon Moderne",
    price: "25€",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRhbGxpb258ZW58MHx8fHwxNzE1NDgzMjU1fDA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Un design moderne pour un look contemporain.",
  },
  {
    id: 3,
    name: "Médaillon Vintage",
    price: "22€",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWVkYWxsaW9ufGVufDB8fHx8MTcxNTQ4MzI1NHww&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Parfait pour ceux qui apprécient le charme de l'ancien.",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const toast = useToast();

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast({
      title: "Produit ajouté",
      description: `${product.name} a été ajouté à votre panier.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Text fontSize="3xl" fontWeight="bold">
          Boutique de Médaillons
        </Text>
        <SimpleGrid columns={3} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} p={5} shadow="xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" />
              <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                {product.name}
              </Text>
              <Text mt={2}>{product.description}</Text>
              <Text fontSize="lg" color="teal.500">
                {product.price}
              </Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" onClick={() => addToCart(product)}>
                Ajouter au panier
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
