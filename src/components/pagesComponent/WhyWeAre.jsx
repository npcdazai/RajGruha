import { Box, Grid, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import dedicated from "../../assets/img/Dedicated.png"
import learning from "../../assets/img/Learning.png"
import feedback from "../../assets/img/Feedback.png"
import Interaction from "../../assets/img/Interaction.png"
import Time from "../../assets/img/Time.png"
import Reliable from "../../assets/img/Reliable.png"

const arr = [
  {
    id: 1,
    img: dedicated,
    title: "Study with Dedicated team of teacher",
    subTitle: "Study with Dedicated team of teachers"
  },
  {
    id: 2,
    img: learning,
    title: "Learning that fits you",
    subTitle: "Study with Dedicated team of teachers"
  },
  {
    id: 3,
    img: feedback,
    title: "Continuous Feedback Mechanism",
    subTitle: "Study with Dedicated team of teachers"
  },
  {
    id: 4,
    img: Interaction,
    title: "Effective Interaction",
    subTitle: "Study with Dedicated team of teachers"
  },
  {
    id: 5,
    img: Time,
    title: "Flexible Time",
    subTitle: "Study with Dedicated team of teachers"
  },
  {
    id: 6,
    img: Reliable,
    title: "Flexible Time",
    subTitle: "Study with Dedicated team of teachers"
  }
]

const WhyWeAre = () => {
  return (
    <VStack w="100%" px={4} py={{ base: 6, md: 12 }} gap={8}>
      <VStack w="100%" gap={6} >
        <Heading fontWeight={400} color="#1C1C1C" fontSize={{ base: "2xl", md: "5xl" }} textAlign="center" ><Text as="span" color="#525FE1" fontWeight={700}>Why we are</Text> best from others?</Heading>
        <Text w="80%" color="#333333" as="span" fontWeight={400} textAlign="center" fontSize={{ base: "sm", md: "md" }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....</Text>
      </VStack>
      <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap="6">
        {arr.map((val) => {
          return (
            <VStack
              bgColor={"#f9fbfc"} 
              rounded="lg"
              p={4}
              width={{ base: "100%", sm: "280px", md: "360px" }}
              border="1px solid #dbdff5"
              height="236px"
              transition="all 0.3s ease-in-out"
              _hover={{
                boxShadow: "0px 322px 90px rgba(148, 148, 148, 0.2)",
                bgColor: "#fff",
                transform: "scale(1.05) translateY(-5px)"
              }}
            >
              <Image src={val.img} boxSize="64px" />
              <Text color="#1C1C1C" fontSize="22px" fontWeight="semibold" textAlign="center">{val.title}</Text>
              <Text color="#4D4D4D" fontSize="14px">{val.subTitle}</Text>
            </VStack>

          )
        })}
      </Grid>
    </VStack>
  )
}

export default WhyWeAre