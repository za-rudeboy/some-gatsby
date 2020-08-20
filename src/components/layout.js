import React from "react"
import Header from "./header"
import { Box } from "@chakra-ui/core"
import "./layout.css"

function Layout({ children }) {
  return (
    <Box bg="darkJungleGreen">
      <Header />
      <div>{children}</div>
    </Box>
  )
}

export default Layout
