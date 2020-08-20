import React from "react"
import { Text, Box } from "@chakra-ui/core"
import Header from "./header"
import Layout from "./layout"

export default function About() {
  return (
    <Layout>
      <Box width="50%" margin="auto">
        <Text>My name is Rudy Adams and I'm from South Africa.</Text>
        <br />
        <Text>
          I’m a software craftsman with over 10 years experience. I’ve worked in
          both the insurance and banking industries building platforms for
          communications and content management, Online Sales and Customer data
          management.
        </Text>
        <br />
        <Text>
          I work mostly in Java and Kotlin. Over the course of my career, I’ve
          worked with various application servers, frameworks and databases.
        </Text>
        <br />
        <Text>I enjoy learning and dabbling in new technologies.</Text>
      </Box>
    </Layout>
  )
}
