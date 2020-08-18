import React from "react"
import { Box, Text, Button } from "@chakra-ui/core"
import Layout from "../components/layout"
import macImage from "../../assets/front-page-image.jpg"

console.log(macImage)
const imageStyle = {
  imageContainer : {
    backgroundImage: `url(${macImage})`,
    backgroundSize: "cover"
  }
}
export default function Home() {
  return (
    <Box
      width="100vw"
      minHeight="100vh"
      style = {imageStyle.imageContainer}
    >
      <Text>Boom</Text>
    </Box>
  )
}
