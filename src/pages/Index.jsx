import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaLeaf, FaRegClock, FaAward } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Rejuvenate Your Skin
              </Heading>
              <Text fontSize="xl" mb={6}>
                Experience our luxurious facial treatments at our medspa. Our expert aestheticians use advanced techniques and premium products to revitalize your skin, leaving you with a youthful and radiant glow.
              </Text>
              <Button colorScheme="green" size="lg">
                Book Now
              </Button>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1501644898242-cfea317d7faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGdldHRpbmclMjBmYWNpYWwlMjB0cmVhdG1lbnQlMjBhdCUyMHNwYXxlbnwwfHx8fDE3MTA1NTE3OTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Facial Treatment" borderRadius="md" />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Why Choose Our Facial Treatments?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center">
              <Icon as={FaLeaf} boxSize={12} color="green.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Natural Ingredients
              </Heading>
              <Text>We use only the finest natural and organic ingredients in our facial treatments to nourish and protect your skin.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaRegClock} boxSize={12} color="green.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Relaxing Experience
              </Heading>
              <Text>Unwind and relax in our tranquil medspa environment while our skilled aestheticians pamper your skin.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaAward} boxSize={12} color="green.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Proven Results
              </Heading>
              <Text>Our facial treatments are designed to deliver visible results, leaving your skin looking and feeling its best.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Transform Your Skin?
          </Heading>
          <Text fontSize="xl" mb={6}>
            Book your facial treatment today and experience the difference.
          </Text>
          <Button colorScheme="green" size="lg">
            Book Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
