// import React from 'react'
import { Icon, Box } from "@chakra-ui/react"
import { IoStarOutline, IoStar } from "react-icons/io5"

function Rating({
  rating,
  iconSize = 6,
  color = "yellow.400",
  showNumber = true,
}: {
  rating: number
  iconSize?: number
  color?: string
  showNumber?: boolean
}): JSX.Element {
  const stars = 5
  const getStarFillWidth = (i: number, r: number): string => {
    if (i < Math.floor(r)) {
      return "100%"
    } else {
      if (i === Math.floor(r)) {
        return `${Math.ceil((r % 1) * 100)}%`
      } else {
        return "0%"
      }
    }
  }

  return (
    <Box
      display="flex"
      alignItems="center">
      {Array(stars)
        .fill("")
        .map((_, i) => (
          <Box
            position={"relative"}
            key={i}>
            <Box
              sx={{
                width: getStarFillWidth(i, rating),
                overflow: "hidden",
                position: "absolute",
              }}>
              <Icon
                as={IoStar}
                boxSize={iconSize}
                color={color}
              />
            </Box>
            <Box boxSize={iconSize}>
              <Icon
                as={IoStarOutline}
                boxSize={iconSize}
                color={color}
              />
            </Box>
          </Box>
        ))}

      {showNumber && (
        <Box
          as="span"
          color="gray.600"
          fontWeight="700"
          fontSize="16" // maybe this can be dynamic
          ml="2">
          {rating}
        </Box>
      )}
    </Box>
  )
}

export default Rating
