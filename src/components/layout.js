import React from "react"
import Header from "./header"
import { Box, Flex } from "@chakra-ui/core"
import "./layout.css"

function Layout({ children }) {
  return (
    <Box
      minHeight="100vh"
      backgroundColor="darkJungleGreen"
    >
      <Header />
      <Flex
        direction="column"
        align="center"
        maxW={{ l: "800px", xl: "800px" }}
        m="0 auto"
      >
        {children}
      </Flex>

      {/* <Header />
      <div>{children}</div> */}
    </Box>
  )
}

export default Layout
