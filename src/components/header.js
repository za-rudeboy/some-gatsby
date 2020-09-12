import React from "react"
import { Flex, Stack, Text, Divider, Box } from "@chakra-ui/core"
import "./layout.css"

export default function Header() {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex as="nav" justifyContent={{ base: "flex-end", md: "flex-end" }}>
      {/* display from tablet size */}
      <Stack
        display={{ base: "None", md: "flex" }}
        marginTop="25px"
        marginRight="25px"
        isInline
      >
        <Text fontSize={{ md: 18, lg: 24 }}>About</Text>
        <Divider orientation="vertical" />
        <Text fontSize={{ md: 18, lg: 24 }}>Education</Text>
        <Divider orientation="vertical" />
        <Text fontSize={{ md: 18, lg: 24 }}>Experience</Text>
        <Divider orientation="vertical" />
        <Text fontSize={{ md: 18, lg: 24 }}>Thoughts</Text>
      </Stack>
      {/* For mobile */}

      <Stack
        display={{ base: "none", xs: show ? "grid" : "none", md: "none" }}
        marginTop="25px"
        marginRight="25px"
        width="full"
        justifyContent="flex-end"
        textAlign="right"
      >
        <Text fontSize="16">About</Text>
        <Divider />
        <Text fontSize="16">Education</Text>
        <Divider />
        <Text fontSize="16">Experience</Text>
        <Divider />
        <Text fontSize="16">Thoughts</Text>
      </Stack>

      {/* <Box display={{ base: "block", md: "none" }} onClick={handleToggle}> */}
      <Box 
        marginTop="10px"
        marginRight="15px"
        display={{ base: "block", md: "none" }} 
        onClick={handleToggle}>
        <svg
          fill="white"
          width="20px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
    </Flex>
  )
}
