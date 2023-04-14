import { Image, Text, Box, VStack } from "@chakra-ui/react"
import Rating from "./Rating"
import TripCardHeader from "./TripCardHeader"

interface TripData {
  title: string
  imageUrl: string
  imageAlt: string
  numberOfCountries: number
  duration: number
  emissionsOffset: string
  rating: number
}

function TripCard({ card }: { card: TripData }) {
  return (
    <Box
      borderWidth="1px"
      rounded="xl"
      boxShadow="base"
      display="flex"
      justifyContent="center"
      p={2}
      overflow="hidden"
      position="relative">
      <Image
        src={card.imageUrl}
        alt={card.imageAlt}
        borderRadius="xl"
        zIndex={1}
        filter="auto"
        brightness="50%"
      />

      <Box
        position={"absolute"}
        bottom={0}
        w="100%"
        px={{ base: "1.3rem", md: "2.2rem", xl: "3.5rem" }}
        zIndex={2}>
        <VStack
          spacing={6}
          align="stretch">
          <TripCardHeader
            title={card.title}
            subtitle={{
              numberOfCountries: card.numberOfCountries,
              days: card.duration,
            }}
            emission={card.emissionsOffset}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            p={4}
            bg={"white"}
            borderTopRadius="lg"
            fontSize={"sm"}>
            <Text
              as="span"
              color="gray.600"
              fontWeight="700"
              mr="2">
              Trip rating
            </Text>
            <Rating
              rating={card.rating}
              iconSize={5}
            />
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}

export default TripCard
