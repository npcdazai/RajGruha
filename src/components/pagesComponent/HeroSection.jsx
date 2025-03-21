import { Box, Button, Circle, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const values = [
    {
        id: 1,
        totalNum: 150,
        captions: "Total Courses"
    },
    {
        id: 2,
        totalNum: 250,
        captions: "Total Instructor"
    },
    {
        id: 2,
        totalNum: 35,
        captions: "Total Student"
    },
]
const HeroSection = () => {
    return (
        <Box bgColor="#F9FBFC" position="relative" w={"100%"} h="100%" >
            <Image src='src\assets\img\heroSideStar.svg' position="absolute" top={10} />

            <HStack justifyContent="space-between" w="100%" alignItems="flex-start" px={14} py={12} h="100%" >
                <VStack bgColor="#F9FBFC" mt={20} justifyContent="flex-start" px={4} w="50%" alignItems="center" h="100%">


                    <VStack w="100%" justifyContent="flex-start" alignItems="flex-start" >
                        <Text as={"h1"} lineHeight="60px" color="#1C1C1C" fontSize="xxx-large" fontWeight={500}>
                            Premium <span style={{ color: "#525FE1" }}>private coaching</span> for <br /> exceptional minds!
                        </Text>
                        <Text as="span" fontWeight={400} color="#808080">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....
                        </Text>
                    </VStack>
                    <HStack w="100%" justifyContent="flex-start">
                        <Button bgColor="#FFCF59" color="#1C1C1C">
                            Join now
                        </Button>
                        <Button color="#1C1C1C" bgColor="#F9FBFC" >
                            <Image src='src/assets/img/play.png' />
                            See how it works?
                        </Button>
                    </HStack>
                </VStack>
                <VStack position="relative" h="100vh" w="40%" overflow="hidden" >
                    <Image src="/src/assets/shape.png" h="500px" />
                    <Image position="absolute" top={28} zIndex={12} src="src/assets/man.png" h="106%" />
                    <Image position="absolute" src="src/assets/redShape.svg" bottom={16} left="80px" />
                </VStack>
            </HStack>
            <HStack  position="relative" w="100%" mt="-3rem" p={6} bgImage="url(src/assets/img/countsection.svg)" bgSize="cover" backgroundPosition="center" >
                <HStack alignItems="center" gap={8} justifyContent="center" w="100%">
                    {values.map((val) => {
                        return (
                            <>
                                <VStack gap="-10px" alignItems="center" >
                                    <Text fontSize="46px" fontWeight={900}>{val.totalNum}</Text>
                                    <Text fontSize="sm" fontWeight={400} >{val.captions}</Text>
                                </VStack>
                            </>
                        )
                    })}
                </HStack>
                <Circle bgColor="#FFCF59" position="absolute" h="162px" w="162px" bottom={"-4rem"} left={"-3rem"} />
                <Circle bgColor="#FFCF59" position="absolute" h="124px" w="124px" top={"-4rem"} right={"-3rem"} />
            </HStack>
        </Box>
    )
}

export default HeroSection