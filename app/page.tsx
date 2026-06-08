import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import { Box, Button, Container, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf9f7]">
      <Header />

      <main className="flex-1">

        {/* Hero */}
        <Container maxW="2xl" textAlign="center" pt={24} pb={20}>
          <Text
            fontSize="xs"
            letterSpacing="widest"
            textTransform="uppercase"
            color="gray.400"
            mb={6}
          >
            Introducing v2.0
          </Text>

          <Text
            as="h1"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="light"
            lineHeight={1.05}
            color="gray.900"
            mb={6}
            fontFamily="serif"
          >
            Build things that{" "}
            <Text as="em" color="orange.500" fontStyle="italic">
              actually
            </Text>{" "}
            matter
          </Text>

          <Text fontSize="lg" color="gray.500" lineHeight="tall" mb={10}>
            A modern platform for teams who want to ship faster without
            sacrificing quality or craft.
          </Text>

          <HStack justify="center" gap={3} flexWrap="wrap">
            <Button
              size="lg"
              bg="gray.900"
              color="white"
              _hover={{ bg: "gray.700" }}
              rounded="lg"
            >
              Start for free
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="gray.300"
              color="gray.700"
              _hover={{ bg: "gray.50" }}
              rounded="lg"
            >
              See how it works →
            </Button>
          </HStack>
        </Container>

        {/* Divider */}
        <Box w="12" h="px" bg="gray.200" mx="auto" mb={20} />

        {/* Feature Cards */}
        <Container maxW="4xl" pb={20}>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            border="1px solid"
            borderColor="gray.200"
            rounded="xl"
            overflow="hidden"
            gap={0}
          >
            {[
              {
                num: "01",
                title: "Ship in minutes",
                desc: "Zero config setup. Go from idea to production without wrestling your toolchain.",
              },
              {
                num: "02",
                title: "Scale effortlessly",
                desc: "Infrastructure that grows with you. Pay for what you use, nothing more.",
              },
              {
                num: "03",
                title: "Team-first design",
                desc: "Built-in collaboration, roles, and audit logs so your whole org stays in sync.",
              },
            ].map((feature, i) => (
              <GridItem
                key={i}
                p={8}
                bg="white"
                borderRight={{ md: i < 2 ? "1px solid" : "none" }}
                borderColor="gray.200"
              >
                <Text
                  fontFamily="serif"
                  fontSize="4xl"
                  color="gray.100"
                  fontWeight="bold"
                  mb={3}
                >
                  {feature.num}
                </Text>
                <Text fontWeight="medium" color="gray.800" mb={2}>
                  {feature.title}
                </Text>
                <Text fontSize="sm" color="gray.500" lineHeight="tall">
                  {feature.desc}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Container>

        {/* CTA Strip */}
        <Box bg="gray.900" py={20} textAlign="center">
          <Text
            fontSize="xs"
            letterSpacing="widest"
            textTransform="uppercase"
            color="gray.600"
            mb={5}
          >
            Ready when you are
          </Text>
          <Text
            as="h2"
            fontFamily="serif"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="light"
            color="white"
            mb={4}
          >
            Your next project starts{" "}
            <Text as="em" color="orange.300" fontStyle="italic">
              here
            </Text>
          </Text>
          <Text color="gray.500" mb={8}>
            Join thousands of teams already building on Acme.
          </Text>
          <Button
            size="lg"
            bg="white"
            color="gray.900"
            _hover={{ bg: "gray.100" }}
            rounded="lg"
          >
            Create free account
          </Button>
        </Box>

      </main>

      <Footer />
    </div>
  );
}
// import Footer from "./Layout/Footer";
// import Header from "./Layout/Header";


// import { Button, HStack } from "@chakra-ui/react"


// export default function Home() {
//   return (

//     <div className="flex flex-col min-h-screen">

//       <Header />
    
//       <main className="flex-1">
//         {/* Your main content goes here */}
//         <HStack>
//           <Button>Click me</Button>
//           <Button>Click me</Button>
//         </HStack>

//       </main>
//       <Footer />
//     </div>
//   );
// }

