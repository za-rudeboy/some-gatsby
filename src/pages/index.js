import React from "react"
import { Box, Heading } from "@chakra-ui/core"
import macImage from "../../assets/front-page-image.jpg"
import Header from "./header"
import Layout from "./layout"

const imageStyle = {
  imageContainer: {
    backgroundImage: `url(${macImage})`,
    backgroundSize: "cover",
  },
}
export default function Home() {
  return (
    <Box width="100vw" minHeight="100vh" style={imageStyle.imageContainer}>
      <Layout>
        <Heading marginLeft="100px" marginTop="30px" color="white" as="h4">
          Rudy Adams
        </Heading>
      </Layout>
    </Box>
  )
}
