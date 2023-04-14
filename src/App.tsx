import { useEffect, useState } from "react"
import { Container, SimpleGrid, Text } from "@chakra-ui/react"

import TripCard from "./components/TripCard"

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:7070/data")

        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        setData(data.data)
      } catch (error) {
        // handle errors here
        console.error(error)
        setError("Something went wrong. Please try again later.")
      }
    }
    fetchData()
  }, [])

  return (
    <Container
      maxW="container.xl"
      p={"sm"}
      py="5rem">
      {data.length ? (
        <SimpleGrid
          columns={{ md: 2, lg: 3, xl: 3 }}
          spacing={5}>
          {data.map((value, i) => (
            <TripCard
              card={value}
              key={i}
            />
          ))}
        </SimpleGrid>
      ) : error ? (
        <Text color="red.800">{error}</Text>
      ) : null}
    </Container>
  )
}

export default App
