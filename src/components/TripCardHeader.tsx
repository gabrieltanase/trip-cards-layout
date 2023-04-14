import { Image, Heading, Text, Box, VStack } from "@chakra-ui/react"
function TripCardHeader({
  title,
  subtitle,
  emission,
}: {
  title: string
  subtitle: { numberOfCountries: number; days: number }
  emission: string
}) {
  const { numberOfCountries, days } = subtitle
  const isPlural = (value: number): boolean => value > 1 || value === 0
  return (
    <VStack
      spacing={2}
      align="stretch"
      textAlign="center">
      <Heading
        as="h3"
        size="md"
        color="white">
        {title}
      </Heading>
      <Text
        as="p"
        color="white"
        fontSize="xs">
        {isPlural(numberOfCountries)
          ? `${numberOfCountries} Countries`
          : `${numberOfCountries} Country`}
        , {isPlural(days) ? `${days} days` : `${days} day`}
      </Text>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.700"
        px={4}
        py={2}
        borderRadius={"lg"}
        color="whiteAlpha.800">
        <Text fontSize="sm">Emission offset:</Text>
        <Text fontSize={"sm"}>
          {emission} CO
          <Text
            as="span"
            fontSize="10px">
            2
          </Text>
          e
        </Text>
      </Box>
    </VStack>
  )
}

export default TripCardHeader
