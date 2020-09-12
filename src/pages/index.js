import React from "react"
import { Box, Heading } from "@chakra-ui/core"
import macImage from "../../assets/front-page-image.webp"
import Header from "../components/header"

const imageStyle = {
  imageContainer: {
    backgroundImage: `url(${macImage})`,
    backgroundSize: "cover",
    backgroundColor: "darkJungleGreen",
  },
}
export default function Home() {
  return (
    <Box width="100vw" minHeight="100vh" style={imageStyle.imageContainer}>
      <Header></Header>
      <Heading marginLeft="1rem" marginTop="30px" color="#c0d8caf5" as="h5">
        Rudy Adams
      </Heading>
    </Box>
  )
}
