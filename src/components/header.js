import React from "react"
import { Flex, Stack, Text, Divider } from "@chakra-ui/core"

export default function Header() {
  return (
    <Flex justifyContent="flex-end">
      <Stack marginTop="25px" marginRight="25px" isInline color="white">
        <Text fontSize={24}>About</Text>
        <Divider orientation="vertical"/>
        <Text fontSize={24}>Education</Text>
        <Divider orientation="vertical"/>
        <Text fontSize={24}>Experience</Text>
        <Divider orientation="vertical"/>
        <Text fontSize={24}>Thoughts</Text>
      </Stack>
    </Flex>
  )
}
