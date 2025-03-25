import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const WhyWeAre = () => {
  return (
    <VStack w="100%" px={4} py={12}>
          <VStack w="100%" gap={6} >
          <Heading fontWeight={400} color="#1C1C1C" fontSize="5xl" ><Text as="span" color="#525FE1" fontWeight={700}>Why we are</Text> best from others?</Heading>
          <Text w="80%" color="#333333" as="span" fontWeight={400} textAlign="center" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....</Text>
          </VStack>
    </VStack>
  )
}

export default WhyWeAre