import React from "react"
import { Box, Heading } from "@chakra-ui/core"
import macImage from "../../assets/front-page-image.jpg"
import Header from "../components/header"
import { ThemeProvider } from "emotion-theming"
import theme from "../gatsby-plugin-chakra-ui/theme"

const imageStyle = {
  imageContainer: {
    backgroundImage: `url(${macImage})`,
    backgroundSize: "cover",
    backgroundColor: `${theme.colors.darkJungleGreen}`,
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
